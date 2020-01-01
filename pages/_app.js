import App from "next/app";
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
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
