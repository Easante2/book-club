import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`;

export const HeaderContainer = styled.header`
  background: #ffbccc;
  border-bottom: 2px solid #000;
  padding: 20px 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  //takes whole width of browser
  width: 100vw;
  display: flex;
  position: fixed;
  //live ontop of all the elements on the page
  //value 3 is the highest value
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
