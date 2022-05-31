import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Caveat";
    src: url("/fonts/Caveat.ttf");
  }

  * {
    cursor: none;
  }

  body {
    background: ${({ theme }) => theme.palette.neutral[700]};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: ${({ theme }) => theme.spacing["s"]};
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 10px 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.palette.neutral[100]};
      border-radius: 5px;
    }
  }
`;
