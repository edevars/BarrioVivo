import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMenuButton = styled.button`
  background: none;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;

const MenuIcon = ({ openMenu }) => {
  return (
    <StyledMenuButton onClick={openMenu}>
      <i className="las la-bars" style={{ fontSize: 32 }} />
    </StyledMenuButton>
  );
};

MenuIcon.propTypes = {
  openMenu: PropTypes.func.isRequired
};

export default MenuIcon;
