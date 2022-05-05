import { Fragment } from "react";

import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Caveat";
  src: url("/fonts/Caveat.ttf");
}
`;

const theme = {
  colors: {
    primaryBlue: {
      110: "#009dae",
      100: "#00b6c7",
      90: "#1ad0e1",
      10: "#dffcff",
      5: "#effdff",
    },
    primaryRed: {
      110: "#a20005",
      100: "#bb0a1e",
      90: "#d52438",
      10: "#fde1e4",
      5: "#fef0f1",
    },
    neutral: {
      100: "#f3f4f8",
      200: "#d2d4da",
      300: "#b3b5bd",
      400: "#9496a1",
      500: "#777986",
      600: "#5b5d6b",
      700: "#404252",
      800: "#282a3a",
      900: "#101223",
    },
  },
  typography: {
    title: {
      fontFamily: "Caveat",
      fontSize: "48px",
      lineHeight: 1.5,
    },
    heading: {
      fontFamily: "Caveat",
      fontSize: "32px",
      lineHeight: 1.5,
    },
    subheading: {
      fontFamily: "Caveat",
      fontSize: "24px",
      lineHeight: 1.5,
    },
    body: {
      fontFamily: "Caveat",
      fontSize: "20px",
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: "Caveat",
      fontSize: "16px",
      lineHeight: 1.5,
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
