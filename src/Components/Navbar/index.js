import React from "react";
import styled from "styled-components";
import Menu from "../../Containers/Menu";
import BrandTitle from "./BrandTitle";

const Nav = styled.nav`
  width: 100%;
  background: #1a1a1a;
  max-height: 50px;
  color: white;
  padding: 15px 0px;
  display: flex;
  position: fixed;
  top: 0;
`;

const MenuWrapper = styled.div`
  justify-self: left;
  display: flex;
  margin-left: 30px;
  align-items: center;
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
