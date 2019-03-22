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

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Xfooter from "./components/Xfooter.vue"

import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
Vue.use(vueBeauty)



export default {
  components: {
    Xfooter
  },
  mounted(){
    console.log(this.$route);
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

