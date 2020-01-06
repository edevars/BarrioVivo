import {
  OPEN_MODAL_ADD,
  OPEN_MODAL_EDIT,
  CLOSE_MODAL_ADD,
  CLOSE_MODAL_EDIT,
  GETTING_MODAL_PRODUCT,
  OPEN_MODAL_CHANGE_PASSWORD,
  CLOSE_MODAL_CHANGE_PASSWORD
} from "../types/modalTypes";

const INITIAL_STATE = {
  addModal: false,
  editModal: false,
  changePasswordModal: false,
  selectedModalProduct: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL_ADD:
      return { ...state, addModal: true };

    case CLOSE_MODAL_ADD:
      return { ...state, addModal: false };

    case OPEN_MODAL_EDIT:
      return { ...state, editModal: true };

    case CLOSE_MODAL_EDIT:
      return { ...state, editModal: false };

    case OPEN_MODAL_CHANGE_PASSWORD:
      return { ...state, changePasswordModal: true };

    case CLOSE_MODAL_CHANGE_PASSWORD:
      return { ...state, changePasswordModal: false };

    case GETTING_MODAL_PRODUCT:
      return { ...state, selectedModalProduct: action.payload };

    default:
      return state;
  }
};
