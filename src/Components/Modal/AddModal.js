import Backdrop from "../General/Backdrop";
import { connect } from "react-redux";
import * as modalActions from "../../redux/actions/modalActions";
import AddForm from "../Forms/AddForm";

const AddModal = props => {
  const { addModal, closeAddModal } = props;
  return (
    <>
      <Backdrop open={addModal} closeBackdrop={closeAddModal} />
      <AddForm />
    </>
  );
};

const mapStateToProps = reducer => reducer.modalReducer;

export default connect(mapStateToProps, modalActions)(AddModal);
