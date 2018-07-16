import React from "react";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
import { loginUser } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
import "./Login.css";

const Login = ({ loginUser, auth, errors, history }) => {
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
                    loginUser={loginUser}
                    auth={auth}
                    errors={errors}
                    history={history}
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
