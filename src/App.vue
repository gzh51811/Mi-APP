<template>
  <div id="app">
      <router-view></router-view>
      <Xfooter></Xfooter>
  </div>
</template>

<script>
import Vue from "vue"
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import Xfooter from "./components/Xfooter.vue"
export default {
  components: {
    Xfooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
