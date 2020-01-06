import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const StyledMenu = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 320px;
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? "0" : "-320px")};
  bottom: 0;
  z-index: 2;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  @media screen and (max-width: 420px) {
    width: 250px;
  }
`;

const StyledTitle = styled.h3`
  margin-left: 30px;
  font-size: 1.5rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  border-top: 2px solid white;
  font-size: 24px;
  padding: 15px 0px;
  color: white;
  padding-left: 15px;
  cursor: pointer;

  .icon {
    margin-right: 15px;
  }
`;

const MenuSlide = ({ open, closeMenu }) => {
  return (
    <StyledMenu isOpen={open}>
      <StyledTitle>Menu</StyledTitle>
      <MenuList>
        <Link href="/resumen">
          <MenuItem onClick={closeMenu}>
            <i className="las la-tasks icon" />
            Resumen
          </MenuItem>
        </Link>
        <Link href="/productos">
          <MenuItem onClick={closeMenu}>
            <i className="las la-shopping-basket icon" />
            Productos
          </MenuItem>
        </Link>
        <Link href="/configuracion">
          <MenuItem
            style={{ borderBottom: "2px solid white" }}
            onClick={closeMenu}
          >
            <i className="las la-cog icon" />
            Configuración
          </MenuItem>
        </Link>
      </MenuList>
    </StyledMenu>
  );
};

MenuSlide.propTypes = {
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default MenuSlide;
