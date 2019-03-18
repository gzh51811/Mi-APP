<template>
<!-- import { loadavg } from 'os'; -->
    <div>
        <div class="logo">
            <img :src="logoimg" alt="">
            <p>{{title}}</p>
        </div>
        <div class="phonebox" v-if="show">
            <van-cell-group>
            <van-field
                v-model="phone"
                required
                label="+86>"
                right-icon="question-o"
                placeholder="请输入手机号"
                error
            />

            <van-field
                v-model="sms"
                center
                clearable
                placeholder="请输入短信验证码"
            
            >
            <van-button slot="button" size="small" style="color: #2ea5e5">发送验证码</van-button>
            </van-field>
            </van-cell-group>
         </div>
       
        <!-- 用户名 -->
        <div class="namebox" v-if="!show">
            <van-cell-group>
            <van-field
                v-model="username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />

            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
            </van-cell-group>
        </div>
        <input type="submit" value="立即登录/注册" class="malogin">
        <p class="namepass" @click="showname" v-text="show?logoname:loadopen"></p>

        <fieldset disabled="disabled">
            <legend align='center'>
                其他方式登录
            </legend>
        </fieldset>
        <div class="inconbox">
            <van-icon name="browsing-history" style="color:red"/>
            <van-icon name="alipay" style="color:red"/>
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
      phone: "",
      sms: "",
      username:'',
      password:'',
      logoimg:
        "https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png",
      title: "小米账号登录",
      show:true,
      logoname:'用户名密码登录',
      loadopen:'手机短信登录/注册'
    }
  },
    methods: {
      showname(){
          this.show = !this.show
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
  font-size: w(7px);
  color: #9b9b9b;
  margin-top: w(40px);
  display: flex;
  li {
    margin: 0 w(13px);
    border-right: 1px solid #9b9b9b;
    padding-right: w(10px);
  }
}
</style>


      
 



