import Backdrop from "../General/Backdrop";
import { connect } from "react-redux";
import * as modalActions from "../../redux/actions/modalActions";


const AddModal = props => {
  const { editModal, closeEditModal } = props;
  return (
    <>
      <Backdrop open={editModal} closeBackdrop={closeEditModal} />
      <EditForm />
    </>
  );
};

const mapStateToProps = reducer => reducer.modalReducer;

export default connect(mapStateToProps, modalActions)(AddModal);
