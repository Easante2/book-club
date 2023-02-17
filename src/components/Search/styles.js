import styled from "styled-components";
import { Pill } from "../../styles";
import { ReactComponent as MagnifyingIcon } from "../../assets/search.svg";

export const SearchContainer = styled(Pill)`
  /* The width defined here will override width in Pill styled component */
  height: 30px;
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "420px" : "20px")};
  transition: 300ms;

  input,
  button {
    display: ${({ $showOnDesktop }) => ($showOnDesktop ? "block" : "none")};
  }
`;

export const Input = styled.input`
  font-family: "Work Sans", sans-serif;
  font-weight: 700px;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`;

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background: #ffbccc;
    border-top: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`;
