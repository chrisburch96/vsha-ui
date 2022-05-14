import { Fragment } from "react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { Navbar } from "components/organisms";
import { GlobalStyle, theme } from "styles";

import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
