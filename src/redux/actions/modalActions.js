import {
  OPEN_MODAL_ADD,
  OPEN_MODAL_EDIT,
  CLOSE_MODAL_ADD,
  CLOSE_MODAL_EDIT
} from "../types/modalTypes";

export const openAddModal = id => dispatch => {
  console.log("Se abre el modal de añadir: ", id);

  dispatch({
    type: OPEN_MODAL_ADD
  });
};

export const closeAddModal = () => dispatch => {

  dispatch({
    type: CLOSE_MODAL_ADD
  });
};

export const openEditModal = id => dispatch => {

  dispatch({
    type: OPEN_MODAL_EDIT
  });
};

export const closeEditModal = () => dispatch => {
  console.log("Se cierra el modal de editar: ");

  dispatch({
    type: CLOSE_MODAL_EDIT
  });
};
