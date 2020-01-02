import React from "react";
import styled from "styled-components";
import Menu from "../../Containers/Navbar/Menu";
import BrandTitle from "./BrandTitle";

const Nav = styled.nav`
  width: 100%;
  background: #1a1a1a;
  max-height: 50px;
  color: white;
  padding: 15px 0px;
  display: flex;
`;

const MenuWrapper = styled.div`
  justify-self: left;
  display: inline-block;
  margin-left: 30px;
`;

const Navbar = () => {
  return (
    <Nav>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <BrandTitle />
    </Nav>
  );
};

export default Navbar;
