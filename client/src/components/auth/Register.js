import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

// import PropTypes from 'prop-types';

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card">
              <div className="card-header card-header-icon card-header-primary">
                <h4 className="card-title">Sign Up</h4>
                <div className="card-icon">
                  <i className="material-icons">language</i>
                </div>
              </div>
              <div className="card-body">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
