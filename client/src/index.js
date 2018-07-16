import React from "react";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router } from "react-router-dom";
import { setCurrentUser } from "./redux/actions/authActions";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./redux/store";
import App from "./App";
import "./index.css";
// import registerServiceWorker from './registerServiceWorker';

// Check if Token exist, and set the auth token
// stored in the localstorage, and decode the token.
if (localStorage.jwt_decode) {
  setAuthToken(localStorage.jwt_decode);
  // Get user info from decoded token
  const decoded = jwt_decode(localStorage.jwt_decode);
  // Set authenticated user
  store.dispatch(setCurrentUser(decoded));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
