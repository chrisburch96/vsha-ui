import { Fragment } from "react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { CustomCursor } from "components/atoms";
import { Navbar } from "components/organisms";
import { GlobalStyle, theme } from "components/styles";

import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomCursor />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
