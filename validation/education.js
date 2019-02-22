const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.gname1 = !isEmpty(data.gname1) ? data.gname1 : '';
  data.gname2 = !isEmpty(data.gname2) ? data.gname2 : '';
  data.gname3 = !isEmpty(data.gname3) ? data.gname3 : '';
  
  if (Validator.isEmpty(data.gname1)) {
    errors.gname1 = 'genre1 field is required';
  }

  if (Validator.isEmpty(data.gname2)) {
    errors.gname2 = 'genre2 field is required';
  }

  if (Validator.isEmpty(data.gname3)) {
    errors.gname3 = 'genre3 field is required';
  }

  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
