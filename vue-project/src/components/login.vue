<template>
  <div>
    <div class="loginstyle" v-show="showlogin">
      <h1>SJTU No.4 canteen</h1>
      <img src="../assets/main.png">
      <h1>登陆</h1>
      <input v-model="username" placeholder="请输入用户名">
      <input v-model="password" placeholder="请输入密码">
      <button v-on:click="login_func">登陆</button>
      <span v-on:click="TransToSignup">没有账号？马上注册</span>
    </div>
    <div class="signupstyle" v-show="showsignup">
      <h1>注册</h1>
      <input v-model="username" placeholder="请输入用户名">
      <input v-model="password" placeholder="请输入密码">
      <button v-on:click="signup_func">注册</button>
      <span v-on:click="TransToLogin">已有账号？立即登陆</span>
    </div>

  </div>
</template>
<script>
  export default{
    name: 'login',
    data () {
      return {
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
          if (userpos === -1) {
            alert('用户名不存在！')
            this.clear()
          } else if (this.pass[userpos] !== this.password) {
            alert('密码错误！')
            this.clear()
          } else {
            alert('登陆成功!')
            this.$router.push('/home')
          }
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
    width:250px;
    height:40px;
    line-height:40px;
    margin:0 auto;
    margin-bottom: 10px;
    outline:none;
    border:1px solid #888;
    padding:10px;
    box-sizing:border-box;
  }
  button{display:block;
    width:250px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    border:none;
    background-color: #2d65b8;
    color:#fff;
    font-size:16px;
    margin-bottom:5px;
  }
</style>
