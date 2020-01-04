import Backdrop from "../General/Backdrop";
import { connect } from "react-redux";
import * as modalActions from "../../redux/actions/modalActions";

const AddModal = props => {
  const { addModal, closeAddModal } = props;
  return (
    <>
      <Backdrop open={addModal} closeBackdrop={closeAddModal} />
    </>
  );
};

const mapStateToProps = reducer => reducer.modalReducer;

export default connect(mapStateToProps, modalActions)(AddModal);
