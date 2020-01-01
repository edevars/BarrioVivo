import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../images/logotipo_BV.png";
import LoginForm from "../../Components/LoginForm";

const LoginWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  border-radius: 10px;
`;

const LoginContainer = () => {
  const [user, setUSer] = useState({
    username: "",
    password: ""
  });

  const handleChangeInput = event => {
    setUSer({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <LoginWrapper>
      <h1>Bienvenido a tu inventario</h1>
      <img src={logo} alt="" />
      <LoginForm
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit}
      />
    </LoginWrapper>
  );
};

export default LoginContainer;
