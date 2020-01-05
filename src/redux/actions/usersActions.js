import {
  GET_ALL_USERS,
  LOADING_USERS,
  ERROR_IN_USER
} from "../types/userTypes";
import users from "../../Mocks/Users.json";

function fakeFetch(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(users.data), ms);
  });
}

export const getAllUsers = () => async dispatch => {
  dispatch({
    type: LOADING_USERS
  });

  try {
    const response = await fakeFetch(1500);

    dispatch({
      type: GET_ALL_USERS,
      payload: response
    });
  } catch (error) {
    console.error("Error: ", error.message);
    dispatch({
      type: ERROR_IN_USER,
      payload: error.message
    });
  }
};
