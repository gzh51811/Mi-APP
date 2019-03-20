<template>
  <div id="shop">
    <div class="header">精品热卖</div>
    <ul class="list">
      <li class="list-item" v-for="(item,idx) in list" :key="idx" @click="todetails">
          <div>
            <img class="img" :src="item.imgurl" width="100%" height="50%">
            <div class="ind">
              <p class="name" v-text="item.name"></p>
              <p class="tip" v-text="item.brief"></p>
              <p class="price" v-text="'￥'+item.taocan[0].price"></p>
              <van-button type="danger" size="small" style="margin-left:30%">立即购买</van-button>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  props:['tap'],
  methods:{
    todetails(){
      this.$router.push({params:{
        
      }})
    }
  },
 async mounted() {
  let data = await this.$axios
  props: ["tap"],
  async mounted() {
    let data = await this.$axios
      .get("http://localhost:8888/setting/findUser", {
        params: {
          type: this.tap.type
        }
      })
      .then(function(res) {
        console.log(res.data);
        return res.data;
        // this.list = res.data.splice(0,4)
      });
    this.list = data.splice(0, 4);
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixin.scss";
#shop {
  margin-bottom: w(50px);
}
#shop .header {
  height: w(80px);
  font-size: w(20px);
  text-align: center;
  line-height: w(80px);
  color: blueviolet;
  background: #f2f2f2;
}
#shop .list {
  height: 100%;
  overflow: hidden;
}
#shop .list .list-item {
  width: 48%;
  float: left;
  margin: 1%;
  background: #e8c1f1;
}
.img {
  height: w(146.4px);
}
.name,
.price,
.tip {
  font-size: w(14px);
  text-align: center;
  color: #333;
}
.price {
  color: red;
}
.tip {
  color: #3c3c3c;
  font-size: w(12px);
}
</style>


