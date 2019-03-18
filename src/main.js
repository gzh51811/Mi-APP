import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
import router from './router';
import flexible from 'lib-flexible';
Vue.use(flexible);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
