import React, { Component } from "react";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
import "./Login.css";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/authActions";

// import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    const { loginUser, auth, errors } = this.props;
    return (
      <div id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center text-white">Login</h1>
              <p className="lead text-center text-white">
                Login to your hub account
              </p>
              <div className="card">
                <div className="card-header" />
                <div className="card-body">
                  <div className="col-md-8 m-auto">
                    <LoginForm
                      registerUser={loginUser}
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
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
