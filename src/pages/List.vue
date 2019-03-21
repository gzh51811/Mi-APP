<template>
  <div>
    <header>
      <van-icon class="arrow-left" name="arrow-left" style="font-size:29px" @click="gotoback"/>
      <div class="listgoods">{{listgoods}}</div>
      <van-icon class="search" name="search" style="font-size:29px" @click="sousuo"/>
    </header>
    <ul class="listul">
      <li v-for="(item,idx) in list" :key="idx" @click="toxq(item.item_id)">
        <img :src="item.imgurl">
        <div class="lileft">
          <p v-text="item.name"></p>
          <font color="#ff4a00" v-text="item.brief"></font>
          <p style="color:#ff4a00" v-text="'￥'+item.taocan[0].price"></p>
        </div>
      </li>
    </ul>

    <img
      class="like"
      src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
      alt
    >

    <ul class="goodlist">
      <li>
        <img
          class="goodimg"
          src="https://i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2!360x360.jpg"
          alt
        >
        <p>最生活浴巾•Air（1条装）</p>
        <p class="price">￥69</p>
      </li>
      <li>
        <img
          class="goodimg"
          src="https://i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2!360x360.jpg"
          alt
        >
        <p>最生活浴巾•Air（1条装）</p>
        <p class="price">￥69</p>
      </li>
      <li>
        <img
          class="goodimg"
          src="https://i8.mifile.cn/b2c-mimall-media/a4d88530d1e6c0882345e44015c3cac2!360x360.jpg"
          alt
        >
        <p>最生活浴巾•Air（1条装）</p>
        <p class="price">￥69</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      listgoods: "商品列表"
    };
  },
  methods: {
    gotoback() {
      this.$router.push("/tap");
    },
    sousuo() {
      this.$router.push("/sousuo");
    },
    toxq(id){
      console.log(id)
       this.$router.push({ path: "/details", query: { id }});
    }
  },
  async mounted() {
    console.log(this.$route);
    await this.$toast.loading({
      mask: true,
      message: "加载中..."
    });
    if (this.$route.query.path == "/home" || this.$route.query.path == "/tap") {
      let data = await this.$axios
        .get("http://localhost:8888/setting/findUser", {
          params: {
            type: this.$route.query.type
          }
        })
        .then(function(res) {
          return res.data;
        })
         .catch(err=>{
          console.log(err)
          this.$router.push('/notfound')
        })
      this.list = data;
      this.$toast.clear()
    } else if (this.$route.query.path == "/sousuo") {
      let data = await this.$axios
        .get("http://localhost:8888/setting/findName", {
          params: {
            name: this.$route.query.name
          }
        })
        .then(function(res) {
          return res.data;
        })
         .catch(err=>{
          console.log(err)
          this.$router.push('/notfound')
        })
      this.list = data;
      this.$toast.clear()
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixin.scss";
header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  height: w(50px);
  background-color: #f2f2f2;
  font-size: w(16px);
  .arrow-left {
    flex: 1;
  }
  .listgoods {
    flex: 7;
    text-align: center;
  }
  .search {
    flex: 1;
  }
}
.listul {
  padding-top: w(50px);
  li {
    display: flex;
    border-bottom: 1px solid #ccc;
    img {
      width: w(156px);
      height: w(156px);
    }
    .lileft {
      height: w(115px);
      font-size: w(16px);
      padding: w(20px) w(20px);
      font-size: w(7px);
      p {
        margin: w(10px) 0;
        font-size: w(16px);
      }
    }
  }
}
.like {
  height: w(60px);
  width: 100%;
  background-color: #ccc;
}
.goodlist {
  li {
    width: w(185px);
    height: w(245px);
    font-size: w(14px);
    display: inline-block;
  }
  .goodimg {
    width: w(185px);
    height: w(185px);
  }
  p {
    margin-left: w(10px);
  }
  .price {
    color: #ff6700;
  }
}
</style>


