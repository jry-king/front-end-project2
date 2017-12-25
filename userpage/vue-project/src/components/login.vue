<template>
  <div>
    <div style="display: flex">
      <transition name="el-fade-in-linear">
        <div v-show="show">
          <img src="../assets/pic.png"></div>
      </transition>
      <div class="loginstyle" v-show="showlogin">
        <div style="font-size:26px; margin-top:140px; color:steelblue">登录</div>
        <input v-model="username" placeholder="请输入用户名">
        <input v-model="password" placeholder="请输入密码">
        <el-button @click="login_func" style="width:130px">登录</el-button>
        <div v-on:click="TransToSignup" style="margin-top:20px">没有账号？马上注册</div>
      </div>
      <div class="signupstyle" v-show="showsignup">
        <div style="font-size:26px; margin-top:140px; color:steelblue">注册</div>
        <input v-model="username" placeholder="请输入用户名">
        <input v-model="password" placeholder="请输入密码">
        <el-button @click="signup_func" style="width:130px">注册</el-button>
        <div v-on:click="TransToLogin" style="margin-top:20px">已有账号？立即登陆</div>
      </div>
    </div>
    <div>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'login',
    data () {
      return {
        show:'true',
        username: '',
        password: '',
        showlogin: true,
        showsignup: false,
        users: [
          '123'
        ],
        pass: [
          '123'
        ]
      }
    },
    methods: {
      clear () {
        this.password = ''
        this.username = ''
      },
      login_func () {
        if (this.username === '' && this.password !== '') {
          this.password = ''
          alert('请输入用户名')
        } else if (this.password === '' && this.username !== '') {
          this.username = ''
          alert('请输入密码')
        } else if (this.username === '' && this.password === '') {
          alert('请输入用户名和密码')
        } else {
          var userpos = this.users.indexOf(this.username)
          //if (userpos === -1) {
            //alert('用户名不存在！')
            //this.clear()
         // } //else if (this.pass[userpos] !== this.password) {
            //alert('密码错误！')
            //this.clear()
         // } //else {
          //  alert('登陆成功!')
          this.show='false'
            this.$router.push('/home')
         // }
        }
      },
      signup_func () {
        if (this.username === '' && this.password !== '') {
          this.password = ''
          alert('请输入用户名')
        } else if (this.password === '' && this.username !== '') {
          this.username = ''
          alert('请输入密码')
        } else if (this.username === '' && this.password === '') {
          alert('请输入用户名和密码')
        } else {
          alert('注册成功!')
          this.users.push(this.username)
          this.pass.push(this.password)
          this.showlogin = true
          this.showsignup = false
        }
      },
      TransToSignup () {
        this.showlogin = false
        this.showsignup = true
      },
      TransToLogin () {
        this.showlogin = true
        this.showsignup = false
      }
    }
  }
</script>
<style>
  .loginstyle{
    text-align: center;
  }
  .signupstyle{
    text-align: center;
  }
  input{
    display:block;
    width:150px;
    height:40px;
    line-height:40px;
    margin:15px;
    margin-bottom: 15px;
    outline:none;
    border:1px solid #73d0f1;
    padding:15px;
    box-sizing:border-box;
    margin-left:20px;
  }
  button{display:block;
    width:150px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    border:none;
    background-color: #2d65b8;
    color:#fff;
    font-size:16px;
    margin-bottom:5px;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

</style>
