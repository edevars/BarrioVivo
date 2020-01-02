import {
  GET_PRODUCTS,
  LOADING_PRODUCT,
  ERROR_IN_PRODUCT
} from "../types/productsTypes";

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload, loading: false };

    case LOADING_PRODUCT:
      return { ...state, loading: true };

    case ERROR_IN_PRODUCT:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
