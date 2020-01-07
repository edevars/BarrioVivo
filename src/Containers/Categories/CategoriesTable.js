import SettingsTable from "../../Components/SettingsTable";
import Button from "../../Components/General/Button";

const CategoriesTable = ({ categories }) => {
  return (
    <>
      <Button style={{ marginBottom: 25 }}>Agregar nueva categoria</Button>
      <SettingsTable
        items={categories}
        onClickEdit={id => {
          console.log(`Se hace click para editar la categoria: ${id}`);
        }}
        onClickDelete={id => {
          console.log(`Se hace click para eliminar la categoria: ${id}`);
        }}
      />
    </>
  );
};

export default CategoriesTable;
