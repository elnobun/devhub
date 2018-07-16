import isEmpty from "../../validation/is-empty";
import { SET_CURRENT_USER } from "../actions/types";

// Initial User state
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Set the current user
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.pay
      };

    // Default state
    default:
      return state;
  }
};
