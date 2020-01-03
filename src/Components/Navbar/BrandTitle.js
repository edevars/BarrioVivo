import React from "react";
import styled from "styled-components";
import logo from "../../images/logotipo_BV.png";

const BrandWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledTitle = styled.h1`
  margin: 0px;
  margin-right: 60px;
  font-size: 2.5rem;
  @media screen and (max-width: 720px) {
    margin-right: 0px;
    padding-right: 15px;
  }
`;

const StyledLogo = styled.img`
  height: 50px;
  margin-right: 20px;
`;

const BrandTitle = () => {
  return (
    <BrandWrapper>
      <StyledLogo src={logo} />
      <StyledTitle>Inventario</StyledTitle>
    </BrandWrapper>
  );
};

export default BrandTitle;
