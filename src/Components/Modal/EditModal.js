import Backdrop from "../General/Backdrop";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as modalActions from "../../redux/actions/modalActions";
import EditForm from "../Forms/EditForm";

const AddModal = props => {
  const { editModal, closeEditModal } = props;

  const editProduct = () => {
    toast.success("Producto editado")
    closeEditModal()
  };

  return (
    <>
      <Backdrop open={editModal} closeBackdrop={closeEditModal} />
      <EditForm editProduct={editProduct} />
    </>
  );
};

const mapStateToProps = reducer => reducer.modalReducer;

export default connect(mapStateToProps, modalActions)(AddModal);
