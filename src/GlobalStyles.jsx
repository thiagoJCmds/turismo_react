import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    max-width: 1024;
    width: 100%;
    font-family: 'roboto', sans-serif;
  }
`