import React from "react";
import RegisterForm from "./RegisterForm";
import "./Register.css";

// import PropTypes from 'prop-types';

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-10 ml-auto mr-auto">
            <div className="card">
              <h2 className="card-title text-center">Sign Up</h2>
              <p className="lead text-center mt-2">
                Create your devHub account
              </p>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5 ml-auto">More info here soon</div>
                  <div className="col-md-5 mr-auto">
                    <RegisterForm />
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

Register.propTypes = {};

export default Register;
