<template>
  <div class="tabright">
    <div
      class="topdiv"
      v-for="(menu,idx) in  menus"
      :key="menu.id+100"
      v-show="idx===$store.state.list[1]"
    >
      <img class="topimg" :src="menus[idx].topimg" alt>
    </div>
    <div class="toptitle">
      <span class="line">——</span>
      <span
        class="wordspan"
        v-text="$store.state.list[0]?$store.state.list[0]:'新品'"
        ref="key"
      >{{$store.state.list[0]}}</span>
      <span class="line">——</span>
    </div>
    <ul>
      <li v-for="(list,idx) in goodslist" :key="idx" @click="goto(list.type)">
        <img :src="list.imgurl" alt>
        <div class="title">{{list.name}}</div>
      </li>
    </ul>
    <div
      class="bottomdiv"
      v-for="(menu,idx) in  menus"
      :key="menu.id"
      v-show="idx===$store.state.list[1]"
    >
      <img class="bottomimg" :src="menus[idx].bottom">
    </div>
    <!-- {{goodslist}} -->
  </div>
</template>
<script>
export default {
  props: ["goodslist"],
  data() {
    return {
      count: 0,
      isLoading: false,
      menus: [
        {
          id: 1,
          topimg:
            "//i8.mifile.cn/v1/a1/250eae49-3536-0d22-4f3a-5041affcb1f9!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/7b4fc049-2b51-b26f-f5e2-427cea7a3925!500x80.webp"
        },
        {
          id: 2,
          topimg:
            "//i8.mifile.cn/v1/a1/4a124f61-aaac-8e83-3698-50e1e065f402!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/107133a6-3424-cdea-65cf-dfd061581ff2!500x80.webp"
        },
        {
          id: 3,
          topimg:
            "//i8.mifile.cn/v1/a1/eacf5445-a567-c5e1-0318-78cf3938f8d4!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/7b4fc049-2b51-b26f-f5e2-427cea7a3925!500x80.webp"
        },
        {
          id: 4,
          topimg:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/69bf9d06a7285a70adbec96448d5377c.jpg?thumb=1&w=500&h=200",
          bottom:
            "//i8.mifile.cn/v1/a1/107133a6-3424-cdea-65cf-dfd061581ff2!500x80.webp"
        },
        {
          id: 5,
          topimg:
            "//i8.mifile.cn/v1/a1/efdcf401-f553-aef7-1751-43854b6f4a20!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/efc0c169-1c1f-3f6c-7590-15948ac35e14!500x80.webp"
        },
        {
          id: 6,
          topimg:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200",
          bottom:
            "//i8.mifile.cn/v1/a1/367bcd70-9f0f-a38d-e005-6c85e9576ba8!500x80.webp"
        },
        {
          id: 7,
          topimg:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f1042af20f63f37c30bd9399efdc0b7a.jpg?thumb=1&w=500&h=200 ",
          bottom:
            "//i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7!500x80.webp"
        },
        {
          id: 8,
          topimg:
            "//i8.mifile.cn/v1/a1/ff205815-61e1-ef9f-d7d2-5650f1224c4b!500x200.webp ",
          bottom:
            "//i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7!500x80.webp"
        },
        {
          id: 9,
          topimg:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/55a9f5db1e6cd217a27b6b59d64509cd.jpg?thumb=1&w=500&h=200",
          bottom:
            "//i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7!500x80.webp"
        },
        {
          id: 10,
          topimg:
            "//i8.mifile.cn/v1/a1/12ff1518-0d4e-516d-173b-97451db7e71d!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7!500x80.webp"
        },
        {
          id: 11,
          topimg:
            "//i8.mifile.cn/v1/a1/46c35310-1039-d412-a688-c78fca114234!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7!500x80.webp"
        },
        {
          id: 12,
          topimg:
            "//i8.mifile.cn/v1/a1/d5c4dbf2-1f00-e781-9547-1755db662801!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7!500x80.webp"
        },
        {
          id: 13,
          topimg:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0c177037f9584ae4a0d0f15928f36602.jpg?thumb=1&w=500&h=200",
          bottom:
            "//i8.mifile.cn/v1/a1/f9e69934-830d-e769-3b2a-7c0679f730e7!500x80.webp"
        },
        {
          id: 14,
          topimg:
            "//i8.mifile.cn/v1/a1/4ca37331-b7a7-6cb9-1479-ee0478ec6e2a!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 15,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 16,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 17,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 18,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 19,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 20,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 21,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 22,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 23,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 24,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        },
        {
          id: 25,
          topimg:
            "//i8.mifile.cn/v1/a1/6911e352-c2b6-559e-2561-aff4c16d8d83!500x200.webp",
          bottom:
            "//i8.mifile.cn/v1/a1/be81647d-ddaf-8c92-6f07-2779f00a39c8!500x80.webp"
        }
      ]
    };
  },
  methods: {
    goto(type) {
      this.$router.push({ name: "List", query: { type }, params: { type } });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>
<style scoped>
.tabright {
  position: fixed;
  right: 0;
  width: calc(80% - 50px);
  height: calc(100% - 96px);
  overflow: scroll;
  margin-left: 25px;
  margin-right: 25px;
}
.tabright::-webkit-scrollbar {
  width: 5px;
}
.topdiv {
  width: 100%;
  height: 100px;
  text-align: center;
}
.topimg {
  display: block;
  width: 100%;
  height: 100%;
  /* margin: auto; */
}
.bottomdiv {
  width: 100%;
  height: 100px;
  text-align: center;
}
.bottomimg {
  display: block;
  width: 100%;
  height: 46%;
}
.toptitle {
  /* margin-left: 38px; */
  text-align: center;
  margin-top: 25px;
}
.wordspan {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;
}
.line {
  color: #f2f2f2;
}
ul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul li {
  width: 30%;
  text-align: center;
  margin-top: 20px;
  overflow: hidden;
}
ul li img {
  display: block;
  width: 50px;
  height: 60px;
  padding-left: 12px;
  padding-right: 12px;
}
.title {
  font-size: 14px;
  color: #666;
  width: 83;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  margin: 10px 0px;
  padding-left: 5px;
}
</style>

