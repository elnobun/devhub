import React, { Component } from "react";

class LoginForm extends Component {
  // Initialize default state of the register form

  state = {
    email: "",
    password: "",
    errors: {}
  };

  // onChange Event function
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit Event function
  onSubmitHandler = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
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
        <div className="text-center form-group bmd-form-group">
          <button
            type="submit"
            className="btn btn-primary btn-round text-center"
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}
export default LoginForm;
