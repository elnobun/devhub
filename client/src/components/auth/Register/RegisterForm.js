import React, { Component } from "react";
import { connect } from "react-redux";
import { registeruser } from "../../../redux/actions/authActions";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";

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

    // Submit to database, and redirect user to login page from redux
    this.props.registeruser(newUser, this.props.history);
  };

  /**
   * Persist the redux error to the error object in component state.
   * This lifecycle gets the props that is contained in the store,
   * then matches it with the current error object in component state.
   * @memberof RegisterForm
   */
  static getDerivedStateFromProps({ errors }) {
    return {
      errors
    };
  }

  // This function endables or disables submit button
  // based on the form state. This is to prevent users
  // from always clicking the submit button, which can
  // be heavey on the system.
  // canBeSubmitted = () => {
  //   const { name, email, password, confirmPassword } = this.state;
  //   return (
  //     name.length > 0 &&
  //     email.length > 0 &&
  //     password.length > 0 &&
  //     confirmPassword.length > 0
  //   );
  // };

  render() {
    const { errors } = this.state;
    // const isEnabled = this.canBeSubmitted();

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
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}

// PropTypes for Register Form
RegisterForm.propTypes = {
  registeruser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Get the auth state from the root reducer (redux/reducers)
// to this Register component
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registeruser }
)(withRouter(RegisterForm));
