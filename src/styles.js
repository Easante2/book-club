import styled, { createGlobalStyle } from "styled-components";

//new global style component
export const GlobalStyle = createGlobalStyle`
body{
    font-family: "Roboto Condensed", "sans-serif";
    margin: 0;
    padding:0;
    //Help smooth the font
    -webkit-font-smoothing: antialiased;
    //browser emphasises legibility of the text, instead of speed and geometric precision
    text-rendering: optimizeLegibility;
}
`;
