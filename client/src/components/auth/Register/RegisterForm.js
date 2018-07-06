import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class RegisterForm extends Component {
  // Initialize default state of the register form
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    disabled: false,
    errors: {}
  };

  // onChange Event function
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit Event function
  onSubmitHandler = e => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = this.state;
    const newUser = {
      name,
      email,
      password,
      confirmPassword
    };

    // Submit to database
    axios
      .post("/api/users/register", newUser)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => this.setState({ errors: err.response.data }));
  };

  // This function endables or disables submit button
  // based on the form state. This is to prevent users
  // from always clicking the submit button, which can
  // be heavey on the system.
  canBeSubmitted = () => {
    const { name, email, password, confirmPassword } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    );
  };

  render() {
    const { errors } = this.state;
    const isEnabled = this.canBeSubmitted();
    // const disabled = disabled ? "disabled" : "";
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div
          className={classnames("form-group bmd-form-group", {
            "is-focused has-danger": errors.name
          })}
        >
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">group</i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Name..."
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandler}
            />
          </div>
          {errors.name && <span className="bmd-help">*{errors.name}</span>}
        </div>

        <div
          className={classnames("form-group bmd-form-group", {
            "is-focused has-danger": errors.email
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
              className="form-control"
              placeholder="example@example.com"
              name="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />
          </div>
          {errors.email && <span className="bmd-help">*{errors.email}</span>}
        </div>

        <div
          className={classnames("form-group bmd-form-group", {
            "is-focused has-danger": errors.password
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
              className="form-control"
              placeholder="Password..."
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
          </div>
          {errors.password && (
            <span className="bmd-help">*{errors.password}</span>
          )}
        </div>

        <div
          className={classnames("form-group bmd-form-group", {
            "is-focused has-danger": errors.confirmPassword
          })}
        >
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">lock_outline</i>
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password..."
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChangeHandler}
            />
          </div>
          {errors.confirmPassword && (
            <span className="bmd-help">*{errors.confirmPassword}</span>
          )}
        </div>

        <div className="text-center form-group bmd-form-group">
          <button
            type="submit"
            className="btn btn-primary btn-round text-center"
            disabled={!isEnabled}
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}
export default RegisterForm;
