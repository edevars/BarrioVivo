import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
    body{
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const theme = {
  colors: {
    primary: "#ffb606",
    dark: "#2a2a2a",
    light: "#ffffff"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
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
    );
  }
}
