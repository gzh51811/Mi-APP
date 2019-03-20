<template>
  <div class="mine" style="background:#f2f2f2">
    <div class="header">
      <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt>
      <span class="login" @click="toLogin">登录</span>
      <span>/</span>
      <span @click="toLogin">注册</span>
    </div>
    <van-cell class="fz" title="我的订单" value="全部订单" is-link arrow-direction size="100px"/>
    <ul class="mineul">
      <li>
        <p>
          <van-icon name="pending-payment" size="30px"/>
        </p>
        <p class="wz">待付款</p>
      </li>
      <li>
        <p>
          <van-icon name="logistics" size="30px"/>
        </p>
        <p>待收货</p>
      </li>
      <li>
        <p>
          <van-icon name="info-o" size="30px"/>
        </p>
        <p>退换修</p>
      </li>
    </ul>
    <van-cell class="mt1o fz" title="会员中心" icon="vip-card" is-link arrow-direction size="200px"/>
    <van-coupon-cell
      class="fz"
      title="我的优惠"
      icon="card"
      is-link
      arrow-direction
      size="100px"
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <van-cell class="mt1o fz" title="服务中心" icon="phone" is-link arrow-direction size="100px"/>
    <van-cell class="fz" title="小米之家" icon="shop-collect" is-link arrow-direction size="100px" @click="toMihome"/>
    <van-cell class="mt1o fz" title="F码通道" icon="star" is-link arrow-direction size="100px"/>
    <van-cell class="fz ptb" title="设置" icon="setting" is-link arrow-direction size="100px"/>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    toLogin() {
      this.$router.push("/login");
    },
    toMihome(){
      this.$router.push("/Mihome");
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background: orangered;
}
.header span {
  display: block;
  height: 70px;
  line-height: 70px;
  float: left;
  color: #fff;
  font-size: 14px;
}
.login {
  margin-left: 5px;
}
.header img {
  display: block;
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
  float: left;
}
.mineul {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top: 1px solid #ccc;
}
ul li {
  width: 30%;
  text-align: center;
  margin-top: 25px;
  font-size: 14px;
}
.mt1o {
  margin-top: 10px;
}
.fz {
  font-size: 20px;
}
.van-cell {
  padding: 20px 15px;
}
</style>
