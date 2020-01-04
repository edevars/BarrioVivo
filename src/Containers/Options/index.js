import PropTypes from "prop-types";
import OptionsMenu from "../../Components/Table/OptionsMenu";

//Redux
import { connect } from "react-redux";
import { openAddModal, openEditModal } from "../../redux/actions/modalActions";
const modalActions = { openAddModal, openEditModal };

const Options = props => {
  const { product, openAddModal, openEditModal } = props;

  return (
    <OptionsMenu
      id={product.id}
      handleOpenAdd={openAddModal}
      handleOpenEdit={openEditModal}
    />
  );
};

const mapStateToProps = reducer => reducer.modalReducer;

Options.propTypes = {
  product: PropTypes.object.isRequired
};

export default connect(mapStateToProps, modalActions)(Options);
