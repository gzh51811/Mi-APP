<template>
  <div>
    <div class="search">
      <van-icon name="arrow-left" @click="gotoback"/>
      <div class="txt">
        <input placeholder="请输入搜索商品" class="stxt" type="text" v-model="value">
      </div>
      <div class="icon">
        搜索
      </div>
    </div>
    <div class="hot">
        <p class="hotss">热门搜索</p>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签dewfwqedwqdwqdwq</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签wqewqewqewqewq</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签</van-tag>
    </div>
    <div class="hot">
        <p class="hotss">热门搜索</p>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签dewfwqedwqdwqdwq</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签wqewqewqewqewq</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签</van-tag>
        <van-tag color="#f2826a" size="large" style="margin:0 10px 10px 0" plain>标签</van-tag>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    },
    methods:{
        gotoback(){
            this.$router.back()
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
.hot{
    padding: 10px;
}
.hotss{
    height: 30px;
    width: 100%;
    font-size: 14px;
}
</style>


