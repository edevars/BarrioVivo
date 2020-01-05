import styled from 'styled-components';

const SubTitle = styled.h3`
    font-size: 1.5rem;
`;

const SettingsContent = () => {
  return (
    <>
      <SubTitle>Usuarios</SubTitle>
      <SubTitle>Categorias</SubTitle>
      <SubTitle>Productos</SubTitle>
    </>
  );
};

export default SettingsContent;
