import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  productsReducer,
  categoriesReducer,
  modalReducer
});
