import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

// import PropTypes from 'prop-types';

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <div className="card">
              <h2 className="card-title text-center">Login</h2>
              <p className="lead text-center">Sign in to your account</p>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5 m-auto">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
