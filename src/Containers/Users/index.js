import SettingsTable from "../../Components/SettingsTable";
import { connect } from "react-redux";
import { openChangePasswordModal } from "../../redux/actions/modalActions";
import Button from "../../Components/General/Button";


const Users = ({ users, openChangePasswordModal }) => {
  return (
    <>
    <Button style={{marginBottom: 25}}>Agregar nuevo usuario</Button>
    <SettingsTable
      items={users}
      onClickEdit={id => {
        console.log(`Se hace click para editar el usuario: ${id}`);
        openChangePasswordModal();
      }}
      onClickDelete={id => {
        console.log(`Se hace click para eliminar el usuario: ${id}`);
      }}
    />
    </>
  );
};

const mapDispatchToProps = {
  openChangePasswordModal
};

const mapStateToProps = reducers => reducers.modalReducer;

export default connect(mapStateToProps, mapDispatchToProps)(Users);
