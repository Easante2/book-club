import React from "react";
import { HeaderContainer, Logo } from "./styles";

const Header = () => (
  <HeaderContainer>
    {/* set href on Logo so clicking on the logo simply refreshes the page */}
    <a href="/">
      {/* svg takes title attribute  */}
      <Logo title="Book Club logo" />
    </a>
  </HeaderContainer>
);

export default Header;
