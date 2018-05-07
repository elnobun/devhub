/* Import validator module */
const Validator = require("validator");
/* Import the isEmpty validator to check if object or string data is valid */
const isEmpty = require("./isEmpty");

/* Create a function that validates user registeration */
module.exports = registerValidation = data => {
  let errors = {};

  // Check for the length of user name. It should be between 2 and 20 characters
  if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Should be between 2 & 30 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
