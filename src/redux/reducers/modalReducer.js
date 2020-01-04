import {
  OPEN_MODAL_ADD,
  OPEN_MODAL_EDIT,
  CLOSE_MODAL_ADD,
  CLOSE_MODAL_EDIT
} from "../types/modalTypes";

const INITIAL_STATE = {
  addModal: false,
  editModal: false
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

    default:
      return state;
  }
};
