import { useState } from "react";
import styled from "styled-components";
import CircleButton from "./CircleArrowButton";
import Button from "../General/Button";

const FormWrapper = styled.div`
  position: fixed;
  background: ${props => props.theme.bulma.light};
  border-radius: 25px;
  z-index: 2;
  width: 400px;
  height: 480px;
  left: calc(50% - 200px);
  top: calc(50vh - 300px);

  @media screen and (max-width: 420px) {
    width: 280px;
    left: calc(50% - 140px);
    top: calc(50vh - 200px);
  }
`;

const InnerWrapper = styled.div`
  margin: 50px auto 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin-top: 20px;
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

const NumberInput = styled.input`
  font-size: 5rem;
  background: none;
  border: none;
  color: ${props => props.theme.bulma.dark};
  line-height: 0;
  padding-bottom: 5px;
  border-bottom: 3px solid ${props => props.theme.bulma.greyLight};
  width: 120px;
  text-align: center;
  @media screen and (max-width: 420px) {
    width: 80px;
    font-size: 4rem;
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

const AddForm = () => {
  const [count, setCount] = useState(0);

  const handleInputChange = event => {
    if (/^\d{1,2}$/.test(event.target.value)) {
      setCount(parseInt(event.target.value));
    } else {
      setCount(0);
    }
  };

  const IncrementCounter = () => {
    setCount(count + 1);
  };

  const DecreaseCounter = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <FormWrapper>
      <InnerWrapper>
        <Title>¿Cuantos productos deseas agregar?</Title>
        <ControlsWrapper>
          <CircleButton
            className="pure-material-button-contained"
            onClick={DecreaseCounter}
          >
            <i className="las la-angle-left" />
          </CircleButton>
          <NumberInput value={count} onChange={handleInputChange} />
          <CircleButton
            className="pure-material-button-contained"
            onClick={IncrementCounter}
          >
            <i className="las la-angle-right" />
          </CircleButton>
        </ControlsWrapper>
        <Button style={{ marginTop: 80 }}>agregar</Button>
      </InnerWrapper>
    </FormWrapper>
  );
};

export default AddForm;
