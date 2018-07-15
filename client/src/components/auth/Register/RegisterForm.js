import React, { Component } from "react";
// import { connect } from "react-redux";
// import { registerUser } from "../../../redux/actions/authActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
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

    const { name, email, password, confirmPassword, errors } = this.state;
    const newUser = {
      name,
      email,
      password,
      confirmPassword
    };
    const isValid = Object.keys(errors).length === 0;

    // Submit to database, and redirect user to login page from redux
    if (isValid) {
      this.props.registerUser(newUser, this.props.history);
    }
  };

  /**
   * Persist the redux error to the error object in component state.
   * This lifecycle gets the error props that is contained in the store,
   * then matches it with the current error object in component state.
   * @memberof RegisterForm
   */
  static getDerivedStateFromProps({ errors }) {
    return {
      errors
    };
  }

  render() {
    const { errors } = this.state;
    // const isEnabled = this.canBeSubmitted();

    return (
      <form onSubmit={this.onSubmitHandler}>
        <div
          className={classnames("form-group", {
            "has-danger": errors.name
          })}
        >
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">person</i>
              </span>
            </div>
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.name
              })}
              placeholder="Name..."
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandler}
            />
            {errors.name && (
              <span className="invalid-feedback mt-3 ml-4">{errors.name}</span>
            )}
          </div>
        </div>
        <div
          className={classnames("form-group", {
            "has-danger": errors.name
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

        <div
          className={classnames("form-group", {
            "has-danger": errors.confirmPassword
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
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.confirmPassword
              })}
              placeholder="Confirm Password..."
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChangeHandler}
            />
            {errors.confirmPassword && (
              <span className="invalid-feedback mt-3 ml-4">
                {errors.confirmPassword}
              </span>
            )}
          </div>
        </div>
        <div className="from-group text-center ">
          <button type="submit" className="btn btn-outline-primary mt-4">
            Register
          </button>
          <p className="mt-5">
            Already registered? Click <Link to="/login">Here</Link> to login
          </p>
        </div>
      </form>
    );
  }
}

// PropTypes for Register Form
RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Get the auth state from the root reducer (redux/reducers)
// to this Register component
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

export default withRouter(RegisterForm);
