import React from "react";
import RegisterForm from "./RegisterForm";
import PropTypes from "prop-types";
import { registerUser } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
import "./Register.css";

const Register = ({ registerUser, auth, errors }) => {
  return (
    <div id="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center text-white">Register</h1>
            <p className="lead text-center text-white">
              Create your hub account
            </p>
            <div className="card">
              <div className="card-header" />
              <div className="card-body">
                <div className="col-md-8 m-auto">
                  <RegisterForm
                    registerUser={registerUser}
                    auth={auth}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
