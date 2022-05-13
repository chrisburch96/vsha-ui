import { Fragment } from "react";

import { withThemes } from "@react-theming/storybook-addon";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles";

const providerFn = ({ theme, children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  );
};
addDecorator(withThemes(null, [theme], { providerFn }));
