/* Import validator module */
const validator = require("validator");
/* Import the isEmpty validator to check if object or string data is valid */
const isEmpty = require("./isEmpty");

/* Create a function that validates user login */
module.exports = loginValidation = data => {
  let errors = {};

  dataFields = ["text"];

  dataFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : "";

    if (data.text) {
      if (!validator.isLength(data.text, { min: 10, max: 400 })) {
        errors.text = "should between 10 and 400 characters";
      }
    }
    // Text field should not be empty
    if (validator.isEmpty(data[field])) {
      errors[field] = `${field} is required`;
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
