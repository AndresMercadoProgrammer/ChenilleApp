import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
* {
 
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  list-style-type: none;
  border: none;

}
a {
  text-decoration: none;
}
html {
    scroll-behavior: smooth;
}

#root {
  
    min-height: 100vh;
    background: #f6f5f7;
}

body {
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;


}
`