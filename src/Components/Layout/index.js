import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.main`
  padding: 20px 100px;
  min-height: calc(100vh - 20px);
  @media screen and (max-width: 720px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 20px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>18
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
