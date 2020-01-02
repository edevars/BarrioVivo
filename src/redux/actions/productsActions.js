import {
  GET_PRODUCTS,
  LOADING_PRODUCT,
  ERROR_IN_PRODUCT
} from "../types/productsTypes";

import productos from "../../../pages/productos";

export const getAllPosts = () => async dispatch => {
  dispatch({
    type: LOADING_PRODUCT
  });

  try {
    const response = productos;

    dispatch({
      type: GET_PRODUCTS,
      payload: response
    });
  } catch (error) {
    console.error("Error", error.message);
    dispatch({
      type: ERROR_IN_PRODUCT,
      payload: error.message
    });
  }
};