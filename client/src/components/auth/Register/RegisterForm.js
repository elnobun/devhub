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
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit Event function

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
              value={this.state.value}
              onChange={this.onChange}
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
            />
          </div>
        </div>
        <div className="text-center form-group bmd-form-group">
          <button type="button" className="btn btn-primary text-center">
            Register
          </button>
        </div>
      </form>
    );
  }
}
export default RegisterForm;
