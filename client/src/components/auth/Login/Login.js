import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  // Onchange event function
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Onsubmit event function
  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };

  render() {
    return (
      <div className="auth-page">
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
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="card-header card-header-primary text-center card-signup">
                      <h4 className="card-title">Log in</h4>
                      <div className="social-line">
                        <div className="btn btn-just-icon btn-link">
                          <i className="fab fa-facebook-square" />
                        </div>
                        <Link to="" className="btn btn-just-icon btn-link">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="" className="btn btn-just-icon btn-link">
                          <i className="fab fa-google-plus" />
                        </Link>
                      </div>
                    </div>
                    <p className="description text-center">Or Be Classical</p>
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
                            name="email"
                            className="input form-control"
                            placeholder="Email..."
                            autoComplete="off"
                            value={this.state.email}
                            onChange={this.onChange}
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
                            name="password"
                            className="input form-control"
                            placeholder="Password..."
                            autoComplete="off"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </div>
                      </span>
                    </div>
                    <div className="footer text-center">
                      <Link
                        to=""
                        className="btn btn-primary btn-link btn-wd btn-lg"
                      >
                        Get Started
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

Login.propTypes = {};

export default Login;
