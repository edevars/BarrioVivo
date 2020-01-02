import {
  GET_PRODUCTS,
  LOADING_PRODUCT,
  ERROR_IN_PRODUCT
} from "../types/productsTypes";
import products from "../../Mocks/Products.json";

function fakeFetch(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.data), ms);
  });
}

export const getAllProducts = () => async dispatch => {
  dispatch({
    type: LOADING_PRODUCT
  });

  try {
    const response = await fakeFetch(1500);
    
    dispatch({
      type: GET_PRODUCTS,
      payload: response
    });
  } catch (error) {
    console.error("Error: ", error.message);
    dispatch({
      type: ERROR_IN_PRODUCT,
      payload: error.message
    });
  }
};
