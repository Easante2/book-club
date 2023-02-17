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

export const Pill = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`;
export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;
  margin-right: 5px;

  /* create the x icon */
  &::before,
  &::after {
    background-color: #000;
    content: "";
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
