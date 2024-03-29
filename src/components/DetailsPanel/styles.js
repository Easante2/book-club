import styled from "styled-components";
import { Pill } from "../../styles";

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;
  /* 82px is the header component height */
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;
  /* stick to right bottom corner of browser */
  /* -660px = off screen and invisible
     660px is the width of the panel */
  right: ${({ $state }) => ($state === "entering" || $state === "entered" ? 0 : "-660px")};
  bottom: 0;

  box-sizing: border-box;
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: ${({ $state }) => ($state === "entering" || $state === "entered" ? 0 : "-100vh")};
    /* right now the panel's going to slide in from both the right and the bottom. */
    /* unset the right rule because we want the panel to only slide in from the bottom vertically */
    right: unset;
    z-index: 3;
  }
`;

export const P = styled.p`
  font-family: "Roboto Condensed", serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`;

export const Em = styled.em`
  font-style: italic;
`;

export const CloseWrapper = styled(Pill)`
  padding: 8px;
  display: ${({ $state }) => ($state === "entered" ? "flex" : "none")};

  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({ $state }) => ($state === "entering" || $state === "entered" ? 1 : 0)};
  /* *1 */
  pointer-events: ${({ $state }) => ($state === "exited" ? "none" : "auto")};
  transition: 300ms;
`;

/* 
*1
~ the pointer events is going to be set to none otherwise, it's going to be set to auto. 
~ This is because we don't want the user to be able to click on the background component while the detail panel is hidden */
