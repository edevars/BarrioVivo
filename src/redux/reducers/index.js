import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import modalReducer from "./modalReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  productsReducer,
  categoriesReducer,
  modalReducer,
  usersReducer
});
