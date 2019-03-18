<template>
  <div id="app">
      <router-view></router-view>
      <Xfooter v-show="$route.meta.showFoot"></Xfooter>
  </div>
</template>

<script>
import Vue from "vue"
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Xfooter from "./components/Xfooter.vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.$axios = axios;

export default {
  components: {
    Xfooter
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

