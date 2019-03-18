<<<<<<< HEAD
import Vue from 'vue';
import App from './App.vue';

import store from './store/tab.js';
=======
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$axios = axios
>>>>>>> 02b2d5156413cf2e3db23e76ddf707b705e3582f

Vue.config.productionTip = false
import router from './router'
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

