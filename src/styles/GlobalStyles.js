import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
}  

body {
  background: rgba(255, 255, 255, 1);
  font-family: "poppins", sans-serif;
  width: 100%;
  scroll-behavior: smooth;
}

/* List without bullets */
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

=======/* MEDIA QUERIES */ ========

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  body {
  max-width: 774px;
  }

}
/* Desktop */
@media (min-width: 1025px) {
  body {
    max-width: 1600px;
    margin: 0 auto;
}

h1 {
  font-size: 100px;
}

h2 {
  font-size: 80px;
}

}
`;
