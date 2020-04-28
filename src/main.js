import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './plugins/router'
import store from './plugins/mainStore'
import vuetify from './plugins/vuetify'
import rules from './plugins/validators'
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$validators = rules;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
