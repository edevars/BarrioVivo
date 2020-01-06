import { GET_CATEGORIES, LOADING_CATEGORIES } from "../types/categoriesTypes";
import categories from "../../Mocks/categories.json";

function fakeFetch(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(categories.data), ms);
  });
}

export const getAllCategories = () => async dispatch => {
  try {
    dispatch({
      type: LOADING_CATEGORIES
    });

    const response = await fakeFetch(1500);

    dispatch({
      type: GET_CATEGORIES,
      payload: response
    });
    
  } catch (error) {
    console.error("Error: ", error.message);
  }
};
