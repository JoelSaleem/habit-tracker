import App from "next/app";
import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme, registerListeners } from "../modules/theme";

export default class Sidebar extends React.Component {
  render() {
    const { Component, pageProps } = this.props;
    const theme = getTheme();
    registerListeners({
      id: "_app",
      callback: this.forceUpdate.bind(this)
    });

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
