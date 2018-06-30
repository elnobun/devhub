import React, { Component } from "react";

class RegisterForm extends Component {
  // Initialize default state of the register form

  // state = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   errors: {}
  // };

  // // onChange Event function
  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // // onSubmit Event function
  // onSubmit = e => {
  //   e.preventDefault();
  //   const newUser = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     password: this.state.password,
  //     confirmPassword: this.state.confirmPassword
  //   };
  //   axios
  //     .post("/api/users/register", newUser)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err.response.data));
  // };
  render() {
    return (
      <div>
        <form action="">
          <div className="from-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name..."
            />
          </div>
        </form>
      </div>
    );
  }
}
export default RegisterForm;
