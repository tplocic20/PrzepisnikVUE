import validator from 'validator';
import i18n from './i18n';
import Vue from 'vue';

const rules = {};
const customRules = {
  required: v => !!v
};

function parseKeys(keys) {
  Object.keys(keys).forEach(function (key) {
    rules[key] = (...args) => {
      return value => {
        let valid = false;
        try {
          valid = keys[key](value, ...args);
        } catch (err) {
          // nothing
        }
        return valid || i18n.t(`validation.${key}`);
      };
    };
  });
}

parseKeys(validator);
parseKeys(customRules);

Vue.prototype.$validators = rules;
export default rules;
