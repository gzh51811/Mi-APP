<template>
  <van-tabbar v-model="active" active-color="#ff6700">
    <van-tabbar-item v-for="(page,idx) in pages" :key="idx" :icon="page.icon" >标签</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      pages: [
        {
          text: "首页",
          icon: "star",
          path: "/home",
          name: "Home"
        },
        {
          text: "分类",
          icon: "balance-list",
          path: "/tap",
          name: "Tap"
        },
        {
          text: "发现",
          icon: "like",
          path: "/find",
          name: "Find"
        },
        {
          text: "购物车",
          icon: "shopping-cart",
          path: "/cart",
          name: "Cart"
        },
        {
          text: "我的",
          icon: "friends",
          path: "/mine",
          name:"Mine"
        }
      ]
    };
  }
};
</script>

