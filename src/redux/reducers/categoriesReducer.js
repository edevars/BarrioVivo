import { GET_CATEGORIES, LOADING_CATEGORIES } from "../types/categoriesTypes";

const INITIAL_STATE = {
  categories: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload, loading: false };

    case LOADING_CATEGORIES:
      return { ...state, loading: true };

    default:
      return state;
  }
};
