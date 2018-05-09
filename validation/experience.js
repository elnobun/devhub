/* Import validator module */
const validator = require('validator');
/* Import the isEmpty validator to check if object or string data is valid */
const isEmpty = require('./isEmpty');

/* Create a function that validates user login */
module.exports = experienceValidation = data => {
  let errors = {};

  dataFields = ['title', 'company', 'from'];

  dataFields.forEach(field => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';

    // Fields should not be empty
    if (validator.isEmpty(data[field])) {
      errors[field] = `${field} is required`;
    }

    // From field should not be empty
    if (validator.isEmpty(data.from)) {
      errors.from = "Date is required"
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
