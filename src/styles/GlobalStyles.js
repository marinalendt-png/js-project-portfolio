import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
}  

body {
  background: rgba(255, 255, 255, 1);
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

/* List without bullets */
  ul {
    list-style: none;
}

`;
