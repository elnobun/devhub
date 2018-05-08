/* Import validator module */
const validator = require("validator");
/* Import the isEmpty validator to check if object or string data is valid */
const isEmpty = require("./isEmpty");

/* Create a function that validates user profile */
module.exports = profileValidation = data => {
  let errors = {};

  // Standard Fields
  dataFields = ["handle", "status", "skills"];

  dataFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : "";
    // Fields should not be empty
    if (validator.isEmpty(data[field])) {
      errors[field] = `${field} is required`;
    }
    // handle should be between 2 and 20 characters
    if (data.handle) {
      if (!validator.isLength(data.handle, { min: 2, max: 20 })) {
        errors.handle = "should be between 2 and 2o characters";
      }
    }
  });

  // URL links should be valid
  socialFields = ["youtube", "twitter", "facebook", "linkedin", "instagram"];

  socialFields.forEach(field => {
    if (!isEmpty(data[field])) {
      if (!validator.isURL(data[field])) {
        errors[field] = "URL is not valid";
      }
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
