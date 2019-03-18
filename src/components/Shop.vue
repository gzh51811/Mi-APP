<template>
  <div id="shop">
    <div class="header">精品热卖</div>
    <ul class="list">
      <li class="list-item" v-for="(item,idx) in list" :key="idx">
        <router-link to="Detail">
          <div>
              <img
              :src="item.imgurl"
              width="100%"
              height="50%"
            >
            <div class="ind">
              <p class="name" v-text="item.name"></p>
              <p class="tip"  v-text="item.brief"></p>
              <p class="price"  v-text="'￥'+item.taocan[0].price"></p>
              <van-button type="danger" size="small" style="margin-left:30%">立即购买</van-button>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  props:['tap'],
 async mounted() {
  let data = await this.$axios
      .get("http://localhost:8888/setting/findUser", {
        params: {
          type: this.tap.type
        }
      })
      .then(function(res) {
        console.log(res.data);
        return res.data
        // this.list = res.data.splice(0,4)
      })
      this.list = data.splice(0,4)
  }
  
};
</script>
<style scoped>
#shop {
  margin-bottom: 50px;
}
#shop .header {
  height: 80px;
  font-size: 20px;
  text-align: center;
  line-height: 80px;
  color: blueviolet;
  background: #f2f2f2;
}
#shop .list {
  height: 100%;
  overflow: hidden;
}
#shop .list .list-item {
  width: 48%;
  height: 270px;
  float: left;
  margin: 1%;
  background: #e8c1f1;
}
.name,
.price,
.tip {
  font-size: 14px;
  text-align: center;
  color: #333;
}
.price {
  color: red;
}
.tip {
  color: #3c3c3c;
  font-size: 12px;
}
</style>


