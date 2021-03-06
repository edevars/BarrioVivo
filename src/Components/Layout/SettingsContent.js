import styled from "styled-components";
import Users from "../../Containers/Users";
import CategoriesTable from "../../Containers/Categories/CategoriesTable";
import Button from "../General/Button";

const SubTitle = styled.h3`
  font-size: 1.5rem;
`;

const SettingsContent = ({ users, categories }) => {

  return (
    <>
      <SubTitle>Usuarios</SubTitle>
      <Users users={users} />
      <SubTitle>Categorias</SubTitle>
      <CategoriesTable categories={categories} />
      <div>
      <SubTitle>Productos</SubTitle>
      <Button>Agregar Producto Nuevo</Button>
      </div>
    </>
  );
};

export default SettingsContent;
