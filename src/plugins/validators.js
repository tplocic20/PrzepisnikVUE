import validator from 'validator';

const rules = {};
const customRules = {
  required: v => !!v
};

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
Object.keys(customRules).forEach(function (key) {
  rules[key] = (...args) => {
    return value => {
      let valid = false;
      try {
        valid = customRules[key](value, ...args);
      } catch (err) {
        // nothing
      }
      return valid || 'error';
    };
  };
});
export default rules;
