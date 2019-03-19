<template>
  <van-tabs background="#f2f2f2" title-active-color="#ff6700" color="#ff6700" lazy-render>
    <van-tab v-for="(tab,idx) in tabs" :key="idx" :title="tab.tab">
      <Banner :tap='tab'></Banner>
      <Listgate :tap='tab'></Listgate>
      <Shop :tap='tab'></Shop>
    </van-tab>
  </van-tabs>
</template>
<script>
import Banner from "./Banner.vue";
import Listgate from "./Listgate.vue";
import Shop from "./Shop.vue";
export default {
  data() {
    return {
      tabs: [
        {
          tab: "推荐",
          type: "tuijian",
          h:200
        },
        {
          tab: "手机",
          type: "phone",
          h:200
        },
        {
          tab: "笔记本",
          type: "pc",
          h:250
        },
        {
          tab: "智能",
          type: "zhineng",
          h:200
        },
        {
          tab: "电视",
          type: "tv",
          h:250
        },
        {
          tab: "家电",
          type: "jiadian",
          h:200
        },
        {
          tab: "周边",
          type: "around",
          h:200
        }
      ]
    };
  },
  components: {
    Banner,
    Listgate,
    Shop
  }
};
</script>

