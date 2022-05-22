import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Caveat";
    src: url("/fonts/Caveat.ttf");
  }

  body {
    margin: 0;
    padding: 10px;
    background: #282a3a;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
