<template>
  <div class="page-login">
    <div class="login-header">
      <router-link to="/" class="logo"></router-link>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 class="tips" v-show="error">{{ error }}</h4>
        <p>
          <span>账号登陆</span>
        </p>
        <el-input
          placeholder="手机号/用户名/邮箱"
          prefix-icon="profile"
          v-model="userName"
          type="text"
        >
        </el-input>
        <el-input
          placeholder="密码"
          prefix-icon="password"
          v-model="passWord"
          type="password"
        >
        </el-input>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit"
          >登录</el-button
        >
        <p class="reg">
          <span>还没有账号？</span>
          <router-link to="/register">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <a
              class="oauth__link oauth__link--qq"
              href="/account/connect/tencent"
              data-mtevent='{"la":"oauth/qq"}'
              target="_blank"
            ></a>
            <a
              class="oauth__link oauth__link--weibo"
              href="/account/connect/sina"
              data-mtevent='{"la":"oauth/sina"}'
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
        ©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      passWord: '',
      userName: '',
      error: ''
    }
  },
  methods: {
    submit () {
      if (!this.passWord) {
        this.error = '请输入密码'
        return false
      } else if (!this.userName) {
        this.error = '请输入账号'
        return false
      }
      axios.get('https://open.duyiedu.com/api/meituan/login', {
        params: {
          userName: this.userName,
          password: this.passWord
        }
      }).then(res => {
        if (res.data.status === 'success') {

        } else {
          this.error = res.data.msg
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>