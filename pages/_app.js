import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ToastContainer } from "react-toastify";
import { theme } from "../src/styles/theme";
import reduxThunk from "redux-thunk";
import reducers from "../src/redux/reducers";
import 'react-toastify/dist/ReactToastify.css';

const GlobalTheme = createGlobalStyle`
    html{
      font-size: 16px;
      @media screen and (max-width: 720px){
        font-size: 14px;
      }
    }
    
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
        <ToastContainer />
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
