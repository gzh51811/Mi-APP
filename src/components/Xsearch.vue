<template>
  <div class="search">
    <div class="logo">
      <img src="../assets/logo.png" width="100%">
    </div>
    <div class="txt" @click="tosousuo">
      <input placeholder="请输入搜索商品" class="stxt" type="text" v-model="value">
    </div>
    <div class="icon">
      <van-icon name="manager"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bool: false,
      value: ""
    };
  },
  methods: {
    tosousuo() {
      this.$router.push('/sousuo')
     
    }
  }
};
</script>
<style scoped>
.search {
  display: flex;
  background: #f2f2f2;
  justify-content: space-between;
  height: 40px;
  padding: 0 10px;
  align-items: center;
  /* width: 100%; */
}
.logo {
  width: 20px;
}
.txt {
  width: 70%;
}
.stxt{
  width: 100%;
  border: none;
  padding-left: 10px;
  font-size: 12px;
  height: 30px;
}
</style>





