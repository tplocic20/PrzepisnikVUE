import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './plugins/router'
import store from './plugins/mainStore'
import vuetify from './plugins/vuetify'
import rules from './plugins/validators'

Vue.config.productionTip = false;
Vue.prototype.$validators = rules;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
