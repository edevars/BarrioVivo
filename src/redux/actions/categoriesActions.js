import { GET_CATEGORIES } from "../types/categoriesTypes";
import categories from "../../Mocks/categories.json";

export const getAllCategories = () => async dispatch => {
  try {
    dispatch({
      type: GET_CATEGORIES,
      payload: categories
    });
  } catch (error) {
    console.error("Error: ", error.message);
  }
};
