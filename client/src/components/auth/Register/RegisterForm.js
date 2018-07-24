import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import classnames from "classnames";
import TextField from "../../common/TextField";

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  /**
   * Persist the redux error to the error object in component state.
   * This lifecycle gets the error props that is contained in the store,
   * then matches it with the current error object in component state.
   * @memberof RegisterForm
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
    // const isEnabled = this.canBeSubmitted();

    return (
      <form onSubmit={this.onSubmitHandler}>
        <div
          className={classnames("form-group", {
            "has-danger": errors.name
          })}
        >
          <TextField
            icon="person"
            type="text"
            name="name"
            placeholder="Name..."
            value={this.state.name}
            onChange={this.onChangeHandler}
            error={errors.name}
          />
        </div>

        <div
          className={classnames("form-group", {
            "has-danger": errors.email
          })}
        >
          <TextField
            icon="email"
            type="email"
            name="email"
            placeholder="example@example.com"
            value={this.state.email}
            onChange={this.onChangeHandler}
            error={errors.email}
          />
        </div>

        <div
          className={classnames("form-group", {
            "has-danger": errors.password
          })}
        >
          <TextField
            icon="lock"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            error={errors.password}
          />
        </div>

        <div
          className={classnames("form-group", {
            "has-danger": errors.confirmPassword
          })}
        >
          <TextField
            icon="lock_outline"
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={this.state.confirmPassword}
            onChange={this.onChangeHandler}
            error={errors.confirmPassword}
          />
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

export default withRouter(RegisterForm);
