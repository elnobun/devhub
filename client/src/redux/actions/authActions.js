import { GET_ERRORS } from "./types";
import axios from "axios";

/**
 * Register User, and redirect to login page
 * @param {Object} userData
 * @param {Location} history
 */
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
