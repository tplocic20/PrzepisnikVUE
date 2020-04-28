import validator from 'validator';

const rules = {};

Object.keys(validator).forEach(function (key) {
  rules[key] = (...args) => {
    return value => {
      let valid = false;
      try {
        valid = validator[key](value, ...args);
      } catch (err) {
        // nothing
      }
      return valid || 'error';
    };
  };
});

export default rules;
