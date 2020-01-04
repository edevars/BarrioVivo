import PropTypes from "prop-types";
import OptionsMenu from "../../Components/Table/OptionsMenu";
import useModal from "../../hooks/useModal";

const Options = ({ product }) => {
  const { id } = product;

  const {
    open: openAdd,
    handleOpen: handleOpenAdd,
    handleClose: handleCloseAdd
  } = useModal();

  const {
    open: openEdit,
    handleOpen: handleOpenEdit,
    handleClose: handleCloseEdit
  } = useModal();

  return (
    <OptionsMenu
      id={id}
      handleOpenAdd={handleOpenAdd}
      handleOpenEdit={handleOpenEdit}
    />
  );
};

Options.propTypes = {
  product: PropTypes.object.isRequired
};

export default Options;
