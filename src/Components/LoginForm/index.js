import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logo from "../../images/logotipo_BV.png";

const LoginWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px -1px 52px -14px rgba(227, 227, 227, 1);
  h1 {
    max-width: 300px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 320px) {
    padding: 15px 0;
  }
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const StyledInput = styled.div`
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;

  .icon {
    margin-right: 5px;
    font-size: 24px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    background: none;
    border: none;
  }
`;

const StyledButton = styled.input`
  background: ${props => props.theme.colors.dark};
  border: none;
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 25px;
  outline: none;
  cursor: pointer;
`;

const LoginForm = ({ handleChangeInput, handleSubmit }) => {
  return (
    <LoginWrapper>
      <h1>Bienvenido a tu inventario</h1>
      <StyledLogo src={logo} alt="logo" />
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledInput>
          <label>Username</label>
          <i class="las la-user icon" />
          <input
            type="text"
            name="username"
            autoComplete
            autoFocus
            onChange={handleChangeInput}
          />
        </StyledInput>
        <StyledInput>
          <label>Password</label>
          <i class="las la-lock icon" />
          <input
            type="password"
            name="password"
            autoComplete
            onChange={handleChangeInput}
          />
        </StyledInput>
        <StyledButton type="submit" value="Ingresar" />
      </StyledLoginForm>
    </LoginWrapper>
  );
};

LoginForm.propTypes = {
  handleChangeInput: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default LoginForm;
