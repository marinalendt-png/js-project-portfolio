import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
}  

body {
  background: #FFF;
  font-family: "poppins", sans-serif;
  max-width: 375px;
  margin: 0 auto;
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
max-width: 1440px;
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
