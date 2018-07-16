import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class LoginForm extends Component {
  // Initialize default state of the register form
  state = {
    email: "",
    password: "",
    errors: {}
  };

  // onChange Event function
  // After errors are shown in the field, remove the error when typing.
  onChangeHandler = e => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  // onSubmit Event function
  onSubmitHandler = e => {
    e.preventDefault();

    const { email, password, errors } = this.state;
    const userData = {
      email,
      password
    };
    const isValid = Object.keys(errors).length === 0;

    // Submit to database, and redirect user to login page from redux
    if (isValid) {
      this.props.loginUser(userData);
    }
  };

  /**
   * Persist the redux error to the error object in component state.
   * This lifecycle gets the error props that is contained in the store,
   * then matches it with the current error object in component state.
   * @memberof LoginForm
   */
  static getDerivedStateFromProps({ errors, auth, history }) {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
    return {
      errors
    };
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmitHandler}>
        <div
          className={classnames("form-group", {
            "has-danger": errors.email
          })}
        >
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">email</i>
              </span>
            </div>
            <input
              type="email"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.email
              })}
              placeholder="Email..."
              name="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />
            {errors.email && (
              <span className="invalid-feedback mt-3 ml-4">{errors.email}</span>
            )}
          </div>
        </div>

        <div
          className={classnames("form-group", {
            "has-danger": errors.password
          })}
        >
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">lock</i>
              </span>
            </div>
            <input
              type="password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password
              })}
              placeholder="Password..."
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
            {errors.password && (
              <span className="invalid-feedback mt-3 ml-4">
                {errors.password}
              </span>
            )}
          </div>
        </div>

        <div className="from-group text-center ">
          <button type="submit" className="btn btn-outline-primary mt-4">
            Login
          </button>
          <p className="mt-5">
            Forgotten Password? Click <Link to="/login">Here</Link>
          </p>
        </div>
      </form>
    );
  }
}

export default LoginForm;
