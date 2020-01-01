import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = ({ handleChangeInput, handleSubmit }) => {
  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        autoComplete
        autoFocus
        onChange={handleChangeInput}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        autoComplete
        onChange={handleChangeInput}
      />
      <input type="submit" value="Ingresar" />
    </StyledLoginForm>
  );
};

LoginForm.propTypes = {
  handleChangeInput: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default LoginForm;
