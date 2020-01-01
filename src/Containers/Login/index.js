import React, { useState } from "react";
import LoginForm from "../../Components/LoginForm";
import Router from "next/router";

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
    Router.push("/dashboard");
  };

  return (
    <LoginForm
      handleChangeInput={handleChangeInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
