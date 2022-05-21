import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Caveat";
    src: url("/fonts/Caveat.ttf");
  }

  body {
    margin: 0;
    padding: 0;
    background: #777986;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
