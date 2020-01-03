import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #1a1a1a;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  h5{
      font-size: 1rem;
      text-align: center;
  }
  padding-bottom: 2rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h5>Barrio Vivo</h5>
        <p>Pirineos 89, Portales Sur, 03300 Ciudad de México, CDMX</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
