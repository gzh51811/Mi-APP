<template>
  <div>
    <div class="search">
      <van-icon class="icon" name="arrow-left" @click="gotoback"/>

      <input placeholder="请输入搜索商品" class="stxt" type="text" v-model.trim="value" ref="search">

      <div>
        <p class="icon" @click="search">搜索</p>
      </div>
    </div>
    <div class="hot">
      <p class="hotss">热门搜索</p>
      <van-tag
        color="#7232dd"
        size="large"
        style="margin:0 10px 10px 0"
        v-for="(txt,idx) in txts"
        :key="idx"
        @click="Xsearch(txt.hot)"
      >{{txt.hot}}</van-tag>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      txts: []
    };
  },
  methods: {
    gotoback() {
      this.$router.back();
    },
    search() {
      if (this.value.length > 0) {
        this.$axios
          .get("addHot", {
            params: {
              hot: this.value
            }
          })
          .then(res => {
            console.log(res);
          });
        this.$router.push({
          path: "/list",
          query: { name: this.value, path: "/sousuo" }
        });
      }
    },
    Xsearch(e) {
      this.$router.push({
        path: "/list",
        query: { name: e, path: "/sousuo" }
      });
    }
  },
  async mounted() {
    this.$refs.search.focus();
    let data = await this.$axios
      .get("hot", {
        params: {
          hot: ""
        }
      })
      .then(res => {
        return res.data;
      });
    this.txts = data;
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
.icon {
  font-size: w(20px);
}
.stxt {
  width: 70%;
  border: none;
  padding-left: w(10px);
  font-size: w(12px);
  height: w(30px);
}
.hot {
  padding: w(10px);
}

.hotss {
  height: w(30px);
  width: 100%;
  font-size: w(14px);
}
</style>


