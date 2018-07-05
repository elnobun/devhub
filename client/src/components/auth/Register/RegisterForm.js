import React, { Component } from "react";

class RegisterForm extends Component {
  // Initialize default state of the register form

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {}
  };

  // onChange Event function
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit Event function
  onSubmitHandler = e => {
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
      <form onSubmit={this.onSubmitHandler}>
        <div className="form-group bmd-form-group">
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
        </div>

        <div className="form-group bmd-form-group">
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
        </div>

        <div className="form-group bmd-form-group">
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
        </div>

        <div className="form-group bmd-form-group">
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
export default RegisterForm;
