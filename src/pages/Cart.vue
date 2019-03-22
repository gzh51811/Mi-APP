<template>
  <div class="cart">
    <header>
      <div @click="gotoback"><van-icon name="arrow-left" size="0.8378rem"/></div>
      <div><span>购物车</span></div>
      <div><van-icon name="search" size="0.8378rem"/></div>
    </header>

    <section class="goLogin">
      <div>
        <span>登录后享受更多优惠</span>
      </div>
      <div @click="goLogin">
        <span>去登录</span>
      </div>
      <div>
        <van-icon name="arrow" size="0.3584rem"/>
      </div>
    </section>

    <section class="kong" v-if="cartlist.length<=0">
      <div></div>
      <div>
        <span>
          <van-icon name="shopping-cart-o" size="0.8378rem"/>
        </span>
        <span>购物车还是空的</span>
        <span @click="goGuang">去逛逛</span>
      </div>
      <div></div>
    </section>

    <main id="main">
      <ul class="list">
        <li class="list-item" v-for="(item,idx) in cartlist" :key="item.item_id">
            <div><input type="checkbox" class="com" v-model="selected" @click="select(idx)" :value="idx" /></div>
            <div><img :src="item.item_url" alt></div>
            <div>
                <p>{{item.item_name}}</p>
                <p>售价：<span>{{item.item_price}}</span>元</p>
                <p>
                  <span @click="delNum(item.item_id,item.item_qty)">
                      <i class="el-icon-minus"></i>
                  </span>
                  <input type="text" :value="item.item_qty">
                  <span @click="addNum(item.item_id,item.item_qty)">
                      <i class="el-icon-plus"></i>
                  </span>
                </p>
            </div>
            <div><van-icon @click="delGoods(item.item_id)" class="com2" name="delete" size=".64rem"/></div>
        </li>
      </ul>
    </main>

    <div class="youlike_img">
      <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt>
    </div>

    <section id="youlike">
      <ul class="youlike_goods">
        <li v-for="item in likes" :key="item.item_id">
          <img @click="goDetails(item.item_id)" :src="item.item_url" alt>
          <div>
            <p>{{item.item_name}}</p>
            <p>￥{{item.item_price}}</p>
          </div>
        </li>
      </ul>
    </section>

    <div class="buy">
      <ul>
        <li>
          <p>共<span>{{num}}</span>件 &nbsp;<span>金额：</span></p>
          <p><span>{{totle}}</span> 元</p>
        </li>
        <li @click="goBuy">
          <span>继续购物</span>
        </li>
        <li>
          <span>去结算</span>
        </li>
      </ul>
    </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      num: 1,
      likes: [],
      cartlist: [],
      selected: [],
      totle: 0,
    }
  },

  computed:{
    // 总金额
    totlePrice(){
      // 遍历
      let num = 0;
      for(var i=0; i<this.selected.length; i++){
        num = this.cartlist[i].item_qty * this.cartlist[i].item_price + num; 
      }
      
      this.totle = num;
    },

    // 购物车渲染
    async showLikes() {
      let { data } = await this.$axios.get(
        "http://localhost:8888/setting/youlikes",
        {
          params: {
            item_id: ""
          }
        }
      )
      .catch(err=>{
          console.log(err)
          this.$router.push('/notfound')
        })
      this.likes = data;

      // 购物车列表渲染
      await this.$axios
        .get("http://localhost:8888/setting/cart", {
          params: {
            item_id: ""
          }
        })
        .then(res => {
          this.cartlist = res.data;
        })
        .catch(err=>{
          console.log(err)
          this.$router.push('/notfound')
        })
    },
  },

  methods: {
    gotoback() {
      this.$router.back();
    },
    goGuang() {
      this.$router.push("/home");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goBuy() {
      this.$router.push("/tap");
    },

    // 购物车点击商品跳转详情页
    goDetails(id) {
      this.$router.push({ path: "/details", query: { id } });
    },

    // 添加数量
    addNum(id, num) {
        num++;
        for (var i = 0; i < this.cartlist.length; i++) {
            if (this.cartlist[i].item_id == id) {
              this.cartlist[i].item_qty = num;
            }
        }
        this.$axios.get("http://localhost:8888/setting/changeNum", {
            params: {
            item_id: id,
            item_qty: num
            }
        });

        this.totlePrice;
    },

    // 减少数量
    delNum(id, num) {
      num--;
      if (num <= 1) {
        num = 1;
        for (let i = 0; i < this.cartlist.length; i++) {
          if (this.cartlist[i].item_id == id) {
            this.cartlist[i].item_qty = num;
          }
        }
        
      } else {
        for (let a = 0; a < this.cartlist.length; a++) {
          if (this.cartlist[a].item_id == id) {
            this.cartlist[a].item_qty = num;
          }
        }
      }
      this.$axios.get("changeNum", {
        params: {
          item_id: id,
          item_qty: num
        }
      });

      this.totlePrice;
    },

    // 删除商品
    delGoods(id) {
      for (var i = 0; i < this.cartlist.length; i++) {
        if (this.cartlist[i].item_id === id) {
          this.cartlist.splice(i, 1);
          
          for(var j=0; j<this.selected.length; j++){
            if(j === i){
              this.selected.splice(j,1);
            }
          }
          this.totlePrice;
        }
      }
      this.$axios.get("delcart", {
        params: {
          item_id: id
        }
      })
    },

      // 复选框勾选
    select(idx){
      // 获取idx在数组中的位置
      let index = this.selected.indexOf(idx);
      if(index >= 0){
        // 已勾选
        this.selected.splice(index,1)
      }else{
        this.selected.push(idx);
      }

      this.totlePrice;
    },

    // // 购物车渲染
    async showLikes() {
      let { data } = await this.$axios.get(
        "http://localhost:8888/setting/youlikes",
        {
          params: {
            item_id: ""
          }
        }
      )
      .catch(err=>{
          console.log(err)
          this.$router.push('/notfound')
        })
      this.likes = data;

      // 购物车列表渲染
      await this.$axios
        .get("cart", {
          params: {
            item_id: ""
          }
        })
        .then(res => {
          this.cartlist = res.data;
        })
        .catch(err=>{
          console.log(err)
          this.$router.push('/notfound')
        })
    },

  },

  async created() {
    await this.$toast.loading({
      mask: true,
      message: "加载中..."
    });
    this.showLikes();
  }

}

</script>


<style lang="scss" scoped>
header {
  display: flex;
  height: 1.3514rem;
  background-color: #f2f2f2;
  color: #999;
  div {
    float: left;
    margin-top: 0.2733rem;
    text-align: center;
    &:nth-child(1) {
      flex: 1.5;
    }
    &:nth-child(2) {
      flex: 7;
    }
    &:nth-child(3) {
      flex: 1.5;
    }
  }
  span {
    display: inline-block;
    font-size: 0.4595rem;
    margin-top: 0.17rem;
  }
}
.goLogin {
  display: flex;
  height: 1.4638rem;
  padding: 0 0.56rem 0 0.32rem;
  div {
    float: left;
    &:nth-child(1) {
      flex: 7.7;
      font-size: 0.4585rem;
      height: 0.5135rem;
      margin-left: 0.3703rem;
      margin-top: 0.4054rem;
    }
    &:nth-child(2) {
      flex: 1.8;
      font-size: 0.3784rem;
      color: rgba(0, 0, 0, 0.54);
      height: 0.3784rem;
      margin-top: 0.5rem;
      margin-left: 1.7014rem;
    }
    &:nth-child(3) {
      flex: 0.5;
      height: 0.4585rem;
      width: 0.4585rem;
      margin-top: 0.5488rem;
    }
  }
}
.kong {
  display: flex;
  height: 1.1081rem;
  background: #ebebeb;
  padding: 0.2703rem;
  justify-content: space-around;
  div {
    float: left;
    &:nth-child(1) {
      flex: 2;
    }
    &:nth-child(2) {
      flex: 6;
      display: flex;
      span {
        align-self: center;
        text-align: center;
        &:nth-child(1) {
          flex: 3.5;
          color: rgba(0, 0, 0, 0.27);
        }
        &:nth-child(2) {
          flex: 12;
          font-size: 0.3784rem;
          color: rgba(0, 0, 0, 0.27);
        }
        &:nth-child(3) {
          flex: 6.5;
          font-size: 0.3784rem;
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 0.0541rem 0;
        }
      }
    }
    &:nth-child(3) {
      flex: 2;
    }
  }
}
#main {
  ul {
    li {
      padding: 0.346667rem 0;
      display: flex;
      border-bottom: 1px solid #eee;
      div {
        float: left;
        // overflow: hidden;
        &:nth-child(1) {
          flex: 1;
          position: relative;
          .com {
            display: inline-block;
            width: 0.426667rem;
            height: 0.426667rem;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        &:nth-child(2) {
          flex: 2.5;
          img {
            width: 2.4rem;
            border: 1px solid #eee;
            margin-right: 0.346667rem;
          }
        }
        &:nth-child(3) {
          flex: 5;
          p {
            &:nth-child(1) {
              width: 5rem;
              font-size: 0.426667rem;
              color: #666;
              height: 1.12rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            &:nth-child(2) {
              color: #999;
              margin-top: 0.08rem;
            }
            &:nth-child(3) {
              margin-top: 0.133333rem;
              span {
                display: inline-block;
                width: 0.586667rem;
                height: 0.586667rem;
                border: 1px solid #ccc;
                color: #3c3c3c;
                background-color: rgb(248, 245, 245);
                text-align: center;
                vertical-align: middle;
              }
              i {
                font-size: 0.373333rem;
                font-weight: bold;
                text-align: center;
                vertical-align: middle;
                color: #918f8f;
              }
              input {
                display: inline-block;
                width: 0.933333rem;
                height: 0.586667rem;
                vertical-align: top;
                border: 1px solid #ccc;
                text-align: center;
              }
            }
          }
        }
        &:nth-child(4) {
          flex: 1.5;
          text-align: center;
          .com2 {
            margin-top: 1.706667rem;
            color: #adadad;
          }
        }
      }
    }
  }
}
.youlike_img {
  img {
    height: 100%;
    width: 100%;
  }
}
#youlike {
  width: 100%;
  height: auto;
  padding-bottom: 1.6216rem;
  overflow: hidden;
  ul {
    width: 100%;
    height: auto;
    li {
      float: left;
      width: 48.5%;
      height: 6.6124rem;
      img {
        width: 5.017rem;
        height: 5.017rem;
        margin-top: 1%;
      }
      &:nth-child(2n + 1) {
        margin-right: 1.5%;
      }
      &:nth-child(2n) {
        margin-left: 1.5%;
      }
      p {
        font-size: 0.4324rem;
        margin: 0.0561rem 0.2803rem;
        &:nth-child(1) {
          width: 4.2854rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:nth-child(2) {
          color: red;
        }
      }
    }
  }
}
.buy {
  width: 100%;
  height: 1.386667rem;
  position: fixed;
  bottom: 0;
  left: 0;
  ul {
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
    li {
      flex: 1;
      float: left;
      height: 1.386667rem;
      text-align: center;
      &:nth-child(1) {
        padding-top: 0.16rem;
        background: #fff;
        p {
          &:nth-child(1) {
            color: #999;
            font-size: 0.346667rem;
          }
          &:nth-child(2) {
            color: #999;
            span {
              color: #ff5722;
              font-size: 0.48rem;
              font-weight: bolder;
            }
          }
        }
      }
      &:nth-child(2) {
        background-color: #f4f4f4;
        font-size: 0.4rem;
        span {
          color: #333;
          line-height: 1.386667rem;
        }
      }
      &:nth-child(3) {
        background-color: #ff6700;
        font-size: 0.4rem;
        span {
          color: #fff;
          line-height: 1.386667rem;
        }
      }
    }
  }
}
</style>

