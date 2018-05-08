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
  });
  //return
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
