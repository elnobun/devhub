import { GET_ERRORS } from "../actions/types";

// Initial error state
const initialError = {};

export default (state = initialError, action) => {
  switch (action.type) {
    // get errors
    case GET_ERRORS:
      return action.payload;
    // default error state
    default:
      return state;
  }
};
