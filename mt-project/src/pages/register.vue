<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            @input="input"
            @blur='blur'
          ></el-input>
          <div class="pw-strength" v-show="showStrength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>

        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="ruleForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import api from '@/axios.js'
export default {
  data () {
    var checkUserName = (rule, value, callback) => {
      const reg = /[^\w]+/gi
      const checkVal = value.match(reg)

      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (value.length > 16 || value.length < 4 || checkVal !== null) {
        callback(new Error('用户名必须为4-16位的字母数字下划线组成'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      const reg = /[^\w]+/gi
      const checkVal = value.match(reg)

      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length > 16 || value.length < 6 || checkVal !== null) {
        callback(new Error('密码必须为6-16位的字母数字下划线组成'))
      } else {
        if (this.ruleForm.rePassword !== '') {
          this.$refs.ruleForm.validateField('rePassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        password: '',
        rePassword: '',
        userName: ''
      },
      strengthClass: '',
      showStrength: false,
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validatePass2, trigger: 'blur' }],
        userName: [{ validator: checkUserName, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.register({
            params: this.ruleForm
          }).then(res => {
            if (res.data.status === 'success') {
              this.$router.push('/login')
            } else {
              alert(res.data.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    input () {
      this.showStrength = true
      if (
        this.ruleForm.password.length > 20 ||
        this.ruleForm.password.length > 6
      ) {
        this.strengthClass = 'strong'
      } else if (this.ruleForm.password.length < 6) {
        this.strengthClass = 'week'
      } else if (!this.ruleForm.password) {
        this.strengthClass = ''
      } else {
        this.strengthClass = 'normal'
      }
    },
    blur () {
      this.showStrength = false
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>