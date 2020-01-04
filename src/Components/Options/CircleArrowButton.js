import styled from "styled-components";

const CircleButton = styled.button`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-family: var(
    --pure-material-font,
    "Roboto",
    "Segoe UI",
    BlinkMacSystemFont,
    system-ui,
    -apple-system
  );

  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;

  transition: box-shadow 0.2s;
  width: 65px;
  height: 65px;
  border: none;
  background: ${props => props.theme.bulma.info};
  border-radius: 50%;
  color: ${props => props.theme.bulma.white};
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    width: 50px;
    height: 50px;
    font-size: 1.7rem;
  }

  &::-moz-focus-inner {
    border: none;
  }

  /* Overlay */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.bulma.info};
    opacity: 0;
    transition: opacity 0.2s;
  }

  /* Ripple */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: ${props => props.theme.bulma.white};
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  /* Hover, Focus */
  &:hover,
  &:focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  &:hover::before {
    opacity: 0.08;
  }

  &:focus::before {
    opacity: 0.24;
  }

  &:hover:focus::before {
    opacity: 0.3;
  }

  /* Active */
  &:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &:active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
`;

const Button = ({ onClick, children }) => {
  return <CircleButton onClick={onClick}>{children}</CircleButton>;
};

export default Button;
