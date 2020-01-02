import React from "react";
import styled, { keyframes } from "styled-components";

const ldsFacebook = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;

const StyledLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${props => props.theme.colors.primary};
    opacity: 0.6;
    animation: ${ldsFacebook} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
