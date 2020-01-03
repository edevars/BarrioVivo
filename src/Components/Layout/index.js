import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 20px 100px;
  @media screen and (max-width: 720px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 10px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
