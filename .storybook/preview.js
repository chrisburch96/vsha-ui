import { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "components/styles";

export const decorators = [
  (Story) => (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </Fragment>
  ),
];
