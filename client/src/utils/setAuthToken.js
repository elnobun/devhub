import axios from "axios";

const setAuthToken = token => {
  // Check if token exist
  if (token) {
    // Set token to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Remove Auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
