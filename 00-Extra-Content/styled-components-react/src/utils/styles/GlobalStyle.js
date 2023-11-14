import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
       html {
        box-sizing: border-box;
          }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        background-color: #E0E5EC;        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
