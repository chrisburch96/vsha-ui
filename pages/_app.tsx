import { FC, Fragment, ReactNode } from "react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { CustomCursor } from "components/atoms";
import { ScrollPanel } from "components/molecules";
import { Navbar } from "components/organisms";
import { GlobalStyle, theme } from "components/styles";

import "@fortawesome/fontawesome-svg-core/styles.css";

interface IAppFrameProps {
  children?: ReactNode;
}

export const AppFrame: FC<IAppFrameProps> = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <CustomCursor />
      <Navbar />
      <ScrollPanel href={"#content"} />
      {children}
    </Fragment>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AppFrame>
          <Component {...pageProps} />
        </AppFrame>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
