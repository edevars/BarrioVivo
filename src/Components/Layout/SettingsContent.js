import styled from "styled-components";
import Users from "../../Containers/Users";
import CategoriesTable from "../../Containers/Categories/CategoriesTable";

const SubTitle = styled.h3`
  font-size: 1.5rem;
`;

const SettingsContent = () => {
  return (
    <>
      <SubTitle>Usuarios</SubTitle>
      <Users />
      <SubTitle>Categorias</SubTitle>
      <CategoriesTable />
      <SubTitle>Productos</SubTitle>
    </>
  );
};

export default SettingsContent;
