import { useState } from "react";
import styled from "styled-components";
import Button from "../General/Button";

const FormWrapper = styled.div`
  position: fixed;
  background: ${props => props.theme.bulma.light};
  border-radius: 25px;
  z-index: 2;
  width: 400px;
  left: calc(50% - 200px);
  top: calc(50vh - 300px);

  @media screen and (max-width: 420px) {
    width: 280px;
    left: calc(50% - 140px);
  }
`;

const InnerWrapper = styled.div`
  margin: 10px auto 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  width: calc(100% - 1.6em);
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  padding: 0.6em 0.8em;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin-top: 20px;
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 0.8rem;
  }
`;

const ChangePassword = () => {
  const [form, setForm] = useState({
    password: "",
    repeatPassword: ""
  });

  const handleChange = () => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  return (
    <FormWrapper>
      <InnerWrapper>
        <Title>Cambiar Contraseña</Title>
        <StyledForm
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <label>Nueva Contraseña</label>
          <StyledInput
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <label>Repetir nueva Contraseña</label>
          <StyledInput
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
          />
          <Button type="submit" style={{ margin: "20px auto 30px" }}>
            Cambiar
          </Button>
        </StyledForm>
      </InnerWrapper>
    </FormWrapper>
  );
};

export default ChangePassword;
