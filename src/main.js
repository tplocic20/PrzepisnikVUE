import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './plugins/router'
import store from './plugins/mainStore'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n';
import axios from 'axios';
import validators from './plugins/validators'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  validators,
  render: h => h(App)
}).$mount('#app');
