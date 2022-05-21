import { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles";

export const decorators = [
  (Story) => (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Fragment>
  ),
];
