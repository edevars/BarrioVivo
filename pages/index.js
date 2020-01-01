import React from "react";
import styled from "styled-components";
import background from "../src/images/login_bg.webp";
import Login from "../src/Containers/Login";


const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  background: #000;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: 0;
  opacity: 0.6;
`;

const Home = () => {

  return (
    <HomeWrapper>
      <BackgroundImage src={background} />
      <Login />
    </HomeWrapper>
  );
};

export default Home;
