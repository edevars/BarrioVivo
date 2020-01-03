import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { theme } from "../src/styles/theme";
import reduxThunk from "redux-thunk";
import reducers from "../src/redux/reducers";

const GlobalTheme = createGlobalStyle`
    body{
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const store = createStore(
  reducers, // Todos los reducers
  {}, //Estado inicial
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalTheme />
          <Head>
            <link
              rel="stylesheet"
              href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
            />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
