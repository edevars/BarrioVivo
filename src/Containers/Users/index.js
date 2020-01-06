import SettingsTable from "../../Components/SettingsTable";

const Users = ({ users }) => {
  return (
    <SettingsTable
      items={users}
      onClickEdit={id => {
        console.log(`Se hace click para editar el usuario: ${id}`);
      }}
      onClickDelete={id => {
        console.log(`Se hace click para eliminar el usuario: ${id}`);
      }}
    />
  );
};

export default Users;
