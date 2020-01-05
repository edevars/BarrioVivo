import {
  OPEN_MODAL_ADD,
  OPEN_MODAL_EDIT,
  CLOSE_MODAL_ADD,
  CLOSE_MODAL_EDIT,
  GETTING_MODAL_PRODUCT
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

export const openEditModal = id => async (dispatch, getState) => {
  console.log("Se abre el modal de añadir: ", id);
  const { products } = getState().productsReducer;

  const productFiltered = await products.filter(product => product.id === id);

  const productSelected = productFiltered[0];

  dispatch({
    type: GETTING_MODAL_PRODUCT,
    payload: productSelected
  });

  dispatch({
    type: OPEN_MODAL_EDIT
  });
};

export const closeEditModal = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL_EDIT
  });
};
