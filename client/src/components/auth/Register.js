import React, { Component } from "react";

// import PropTypes from 'prop-types';

class Register extends Component {
  // Initialize default state of the register form
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {}
  };

  // onChange Event function
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit Event function
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    console.log(newUser);
  };

  render() {
    return (
      <div className="auth-page">
        <div className="page-header header-filter clear-filter page-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                <div className="card card-signup">
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="card-header card-header-primary text-center card-signup">
                      <h4 className="card-title">Sign Up</h4>
                      <div className="social-line">
                        <div className="btn btn-just-icon btn-link">
                          <i className="fas fa-user-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* NAME */}
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">person</i>
                            </span>
                          </div>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name..."
                            autoComplete="off"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </div>
                      </span>

                      {/* EMAIL */}
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">mail</i>
                            </span>
                          </div>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Address..."
                            autoComplete="off"
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                        </div>
                      </span>

                      {/* PASSWORD */}
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">lock</i>
                            </span>
                          </div>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password..."
                            autoComplete="off"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </div>
                      </span>

                      {/* CONFIRM PASSWORD */}
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Confirm Password..."
                            autoComplete="off"
                            value={this.state.confirmPassword}
                            onChange={this.onChange}
                          />
                        </div>
                      </span>
                    </div>

                    <div className="footer text-center">
                      <input
                        type="submit"
                        value="Register"
                        className="btn btn-primary btn-link btn-wd btn-lg"
                      />
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
