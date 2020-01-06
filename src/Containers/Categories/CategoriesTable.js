import SettingsTable from "../../Components/SettingsTable";

const CategoriesTable = ({ categories }) => {
  return (
    <SettingsTable
      items={categories}
      onClickEdit={id => {
        console.log(`Se hace click para editar la categoria: ${id}`);
      }}
      onClickDelete={id => {
        console.log(`Se hace click para eliminar la categoria: ${id}`);
      }}
    />
  );
};

export default CategoriesTable;
