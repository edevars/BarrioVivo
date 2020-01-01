import React from "react";
import styled from "styled-components";
import logo from "../images/logotipo_BV.png";
import background from "../images/login_bg.webp";

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

const LoginWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  border-radius: 10px;
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Home = () => {
  const handleSubmint = event => {
    event.preventDefault();
    console.log("Haciendo login");
  };

  return (
    <HomeWrapper>
      <BackgroundImage src={background} />
      <LoginWrapper>
        <h1>Bienvenido</h1>
        <img src={logo} alt="" />
        <form action="" onSubmit={handleSubmint} className="login">
          <label>Username</label>
          <input type="text" name="username" autoComplete autoFocus />
          <label>Password</label>
          <input type="password" name="password" autoComplete />
          <input type="submit" value="Ingresar" />
        </form>
      </LoginWrapper>
    </HomeWrapper>
  );
};

export default Home;
