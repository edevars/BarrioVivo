import { GET_CATEGORIES } from "../types/categoriesTypes";

const INITIAL_STATE = {
  categories: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload, loading: false };

    default:
      return state;
  }
};
