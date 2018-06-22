import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types';

class Register extends Component {
  render() {
    return (
      <div className="login-page">
        <div
          className="page-header header-filter clear-filter"
          style={{
            backgroundColor: "rgb(41, 75, 128)",
            transform: "translate3d(0, 0, 0)"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                <div className="card card-signup">
                  <form className="form" method="" action="">
                    <div className="card-header card-header-primary text-center card-signup">
                      <h4 className="card-title">Sign Up</h4>
                      <div className="social-line">
                        <div className="btn btn-just-icon btn-link">
                          <i className="fas fa-user-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">mail</i>
                            </span>
                          </div>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email..."
                            autoComplete="off"
                            style={{ cursor: "auto" }}
                          />
                        </div>
                      </span>
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password..."
                            autoComplete="off"
                            style={{ cursor: "auto" }}
                          />
                        </div>
                      </span>
                    </div>
                    <div className="footer text-center">
                      <Link
                        to=""
                        className="btn btn-primary btn-link btn-wd btn-lg"
                      >
                        Register
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {};

export default Register;
