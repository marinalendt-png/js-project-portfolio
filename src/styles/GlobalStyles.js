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
  width: 1200px;
  margin: 0 auto; 
  padding: 0 16px;
  scroll-behavior: smooth;
}

/* List without bullets */
  ul {
    list-style: none;
}

=======/* MEDIA QUERIES */ ========

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  body {
  padding: 0 32px;
  }

}
/* Desktop */
@media (min-width: 1025px) {
  body {
    max-width: 1400px;
    padding: 0 48px;
}

h1 {
  font-size: 100px;
}

h2 {
  font-size: 80px;
}
}
`;
