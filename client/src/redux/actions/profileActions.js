import axios from "axios";

import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "./types";

// Get current user profile
export const getCurrentProfile = () => dispatch => {
  // set the loading state before getting the profile
  dispatch(setProfileLoading());
  // get user profile from api
  axios
    .get("/api/profile")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        // If there is no profile, return an empty profile instead of an error
        type: GET_PROFILE,
        payload: {}
      });
    });
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
