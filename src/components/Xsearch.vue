<template>
  <div class="search">
    <div class="logo">
      <img src="../assets/logo.png" width="100%">
    </div>
      <input @click="tosousuo" placeholder="请输入搜索商品" class="stxt" type="text" v-model="value">
    <div class="icon">
      <van-icon class="icon" name="manager"/>
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
<style lang="scss" scoped>
@import "../styles/_mixin.scss";
.search {
  display: flex;
  background: #f2f2f2;
  justify-content: space-between;
  height:w(40px) ;
  padding: 0 w(10px);
  align-items: center;
  /* width: 100%; */
}
.logo {
  width: w(20px);
  height: w(70px);
}
.stxt{
  width: 70%;
  border: none;
  padding-left: w(10px);
  font-size: w(12px);
  height: w(30px);
}
.icon{
  font-size: 20px;
}
</style>





