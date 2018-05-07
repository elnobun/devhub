/* Import validator module */
const validator = require("validator");
/* Import the isEmpty validator to check if object or string data is valid */
const isEmpty = require("./isEmpty");

/* Create a function that validates user login */
module.exports = loginValidation = data => {
  let errors = {};

  dataFields = ["email", "password"];

  dataFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : "";
    // Fields should not be empty
    if (validator.isEmpty(data[field])) {
      errors[field] = `${field} is required`;
    }

    // // Email should be valid
    // if (data.email) {
    //   if (!validator.isEmail(data.email)) {
    //     errors.email = "Incorrect email or password";
    //   }
    // }
    //
    // // Password should have at least 6 characters
    // if (data.password) {
    //   if (!validator.isLength(data.password)) {
    //     errors.password = "Incorrect email or password";
    //   }
    // }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
