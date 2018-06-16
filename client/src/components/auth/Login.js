import React, { Component } from "react";
import Navbar from "../layout/Navbar";

// import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>Login Page</div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
