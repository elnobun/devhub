/* Import validator module */
const validator = require("validator");
/* Import the isEmpty validator to check if object or string data is valid */
const isEmpty = require("./isEmpty");

/* Create a function that validates user registeration */
module.exports = registerValidation = data => {
  let errors = {};

  dataFields = ["name", "email", "password", "confirmPassword"];
  dataFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : "";
    // Fields should not be empty
    if (validator.isEmpty(data[field])) {
      errors[field] = `${field} is required`;
    }

    // Name should be between 2 and 20 characters
    if (data.name) {
      if (!validator.isLength(data.name, { min: 2, max: 20 })) {
        errors.name = "should be between 2 & 30 characters";
      }
    }

    // Email should be valid
    if (data.email) {
      if (!validator.isEmail(data.email)) {
        errors.email = "email is invalid";
      }
    }

    // Password should have at least 6 characters
    if (data.password) {
      if (!validator.isLength(data.password, { min: 6 })) {
        errors.password = "should have at least 6 characters ";
      }
    }

    // Passwords should match
    if (data.confirmPassword) {
      if (!validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = "Passwords do not match";
      }
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
