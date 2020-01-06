import Backdrop from "../General/Backdrop";
import { connect } from "react-redux";
import ChangePasswordForm from "../Forms/ChangePasswordForm";
import { closeChangePasswordModal } from "../../redux/actions/modalActions";

const ChangePasswordModal = props => {
  const { changePasswordModal, closeChangePasswordModal } = props;
  return (
    <>
      <Backdrop
        open={changePasswordModal}
        closeBackdrop={closeChangePasswordModal}
      />
      <ChangePasswordForm />
    </>
  );
};

const mapStateToProps = reducer => reducer.modalReducer;

const mapDispatchToProps = {
  closeChangePasswordModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordModal);
