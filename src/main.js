import Vue from 'vue';
import App from './App.vue';

import store from './store/tab.js';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/setting/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
import router from './router';
import flexible from 'lib-flexible';
Vue.use(flexible);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
