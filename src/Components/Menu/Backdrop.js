import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBackdrop = styled.div`
  background: ${props => props.theme.colors.dark};
  opacity: 0.5;
  display: ${props => (props.isOpen ? "inherit" : "none")};
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const Backdrop = ({ open, closeMenu }) => {
  return <StyledBackdrop isOpen={open} onClick={closeMenu} />;
};

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default Backdrop;
