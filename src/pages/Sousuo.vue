<template>
  <div>
    <div class="search">
      <van-icon class="icon" name="arrow-left" @click="gotoback"/>
      
        <input  placeholder="请输入搜索商品" class="stxt" type="text" v-model="value">
     
      <div >
          <p class="icon" @click="search">搜索</p>
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
        },
        search(){
          this.$router.push({path:'/list',query:{name:this.value,path:'/sousuo'}})
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
  height: w(40px);
  padding: 0 w(10px);
  align-items: center;
}
.icon{
  font-size: w(20px);
}
.stxt{
  width: 70%;
  border: none;
  padding-left: w(10px);
  font-size: w(12px);
  height: w(30px);
}
.hot{
    padding: w(10px);
}

.hotss{
    height: w(30px);
    width: 100%;
    font-size: w(14px);
}
</style>


