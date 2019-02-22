const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.artist = !isEmpty(data.artist) ? data.artist : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (Validator.isEmpty(data.artist)) {
    errors.artist = 'artist field is required';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'title field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'description field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
