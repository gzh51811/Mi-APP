<template>
  <div>
    <div class="logo">
      <img :src="logoimg">
      <p>{{title}}</p>
    </div>
    <div class="namebox">
      <van-cell-group>
        <van-field
          v-model="uname"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('用户名')"
          :error-message="utip"
        />
        <van-field
          v-model="pswd"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :error-message="ptip"
        />
        <van-field
          v-model="repswd"
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"
          required
          :error-message="rptip"
        />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <input type="submit" value="立即注册" class="malogin" @click="login">
    <p class="namepass" v-text="loadopen" @click="todenglu"></p>
    <fieldset disabled="disabled">
      <legend align="center">其他方式登录</legend>
    </fieldset>
    <div class="inconbox">
      <van-icon name="browsing-history" size="30px" style="color:red"/>
      <van-icon name="alipay" size="30px" style="color:red"/>
    </div>
    <ul class="five">
      <li>简体</li>
      <li>繁体</li>
      <li>English</li>
      <li>常见问题</li>
      <li>隐私政策</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "loginname",
  components: {},
  data() {
    return {
      utip: "",
      ptip: "",
      rptip: "",
      uname: "",
      sms: "",
      pswd: "",
      repswd: "",
      logoimg:
        "https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png",
      title: "小米账号登录",
      show: true,
      loadopen: "去登录"
    };
  },
  methods: {
    todenglu() {
      this.$router.push("/denglu");
    },
    async login() {
      if (this.uname == "") {
        this.utip = "用户名不能为空";
      } else {
        this.utip = "";
      }
      if (this.pswd == "") {
        this.ptip = "密码不能为空";
      } else {
        this.ptip = "";
      }
      if (this.pswd != this.repswd) {
        this.rptip = "两次密码输入不同";
      } else {
        this.rptip = "";
      }
      if (this.uname != "" && this.pswd != "" && this.pswd === this.repswd) {
        let data = await this.$axios({
          method: "post",
          headers: { "content-type": "application/x-www-form-urlencoded" }, //局部更改
          url: "http://localhost:8888/setting/zhuce",
          data: this.$qs.stringify({
            uname: this.uname,
            password: this.pswd
          })
        }).then(res => {
          return res.data;
        });
        if (data === "注册成功") {
          await this.$toast.success("注册成功，快去登录吧");
        } else {
          await this.$toast.fail(data);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/_mixin.scss";
.logo {
  height: 2.5rem;
  text-align: center;
  margin-top: 0.625rem;
  overflow: hidden;
  img {
    width: 1.25rem;
    height: 1.25rem;
  }
  p {
    font-size: 0.4375rem;
  }
}
.van-cell-group {
  margin-top: 0.3125rem;
}
.malogin,
.namepass {
  height: w(40px);
  width: w(360px);
  font-size: 0.5625rem;
  border-radius: 0.375rem;
}
.malogin {
  margin: 0.4375rem 0.1875rem;
  background-color: #ff6700;
  color: #fff;
  border: none;
}
.namepass {
  display: block;
  border: 1px solid palegoldenrod;
  margin: 0 0.1875rem;
  text-align: center;
  line-height: w(40px);
}
fieldset {
  border: none;
  border-top: w(0.5px) solid #d3d3d3;
  font-size: w(12px);
  margin: w(70px) 0.3125rem 0.25rem 0.1875rem;
}
.inconbox {
  width: w(100px);
  margin: 0 auto;
  margin-top: w(20px);
}
.five {
  color: #9b9b9b;
  margin-top: w(40px);
  display: flex;
  justify-content: space-around;
  li {
    border-right: w(1px) solid #9b9b9b;
    font-size: w(12px);
    width: 18%;
    text-align: center;
  }
}
</style>


      
 



