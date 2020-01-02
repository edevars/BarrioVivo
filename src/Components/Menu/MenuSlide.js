import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMenu = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 320px;
  position: absolute;
  top: 0;
  left: ${props => (props.isOpen ? "0" : "-320px")};
  bottom: 0;
  z-index: 2;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
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

const MenuSlide = ({ open }) => {
  return (
    <StyledMenu isOpen={open}>
      <StyledTitle>Menu</StyledTitle>
      <MenuList>
        <MenuItem>
          <i class="las la-tasks icon" />
          Resumen
        </MenuItem>
        <MenuItem>
          <i class="las la-shopping-basket icon" />
          Productos
        </MenuItem>
        <MenuItem style={{ borderBottom: "2px solid white" }}>
          <i class="las la-cog icon" />
          Configuración
        </MenuItem>
      </MenuList>
    </StyledMenu>
  );
};

MenuSlide.propTypes = {
  open: PropTypes.bool.isRequired
};

export default MenuSlide;
