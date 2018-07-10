import axios from "axios";
import { GET_ERRORS } from "./types";
import setAuthToken from "../../utils/setAuthToken";

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

/**
 * Login User action - User Token
 * @param {Object} userData
 */
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Get user token
      const { token } = res.data;
      // Save user to localstorage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
