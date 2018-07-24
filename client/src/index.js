import React from "react";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router } from "react-router-dom";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { clearCurrentProfile } from "./redux/actions/profileActions";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./redux/store";
import App from "./App";
import "./index.css";
// import registerServiceWorker from './registerServiceWorker';

// Check if Token exist, and set the auth token
// stored in the localstorage, and decode the token.
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  // Get user info from decoded token
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set authenticated user
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout the user
    store.dispatch(logoutUser());

    // clear current profile
    store.dispatch(clearCurrentProfile());

    // redirect to login
    window.location.href = "/login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
