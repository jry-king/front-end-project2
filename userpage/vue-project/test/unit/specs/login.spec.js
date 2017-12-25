import Vue from 'vue'
import login from '@/components/login'

describe('login.vue', () => {
  const Constructor = Vue.extend(login)
  const vm = new Constructor().$mount()
  it('username', () => {
    expect(vm.username).to.be.equal('')
  })
  it('password', () => {
    expect(vm.password).to.be.equal('')
  })
  it('showlogin', () => {
    expect(vm.showlogin).to.be.equal(true)
  })
  it('showsignup', () => {
    expect(vm.showsignup).to.be.equal(false)
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.title ').textContent)
      .to.equal('登录')
    expect(vm.$el.querySelector('.title1 ').textContent)
      .to.equal('注册')
  })
  it('input1 should exist', () => {
    expect(vm.$el.querySelector('.loginstyle .input1'))
      .to.be.exist
  })
  it('span should exist and be right', () => {
    expect(vm.$el.querySelector('.loginstyle .span1'))
      .to.be.exist
    expect(vm.$el.querySelector('.loginstyle .span1').textContent)
      .to.equal('没有账号？马上注册')
  })
  it('span should exist and be right', () => {
    expect(vm.$el.querySelector('.signupstyle .span2'))
      .to.be.exist
    expect(vm.$el.querySelector('.signupstyle .span2').textContent)
      .to.equal('已有账号？立即登陆')
  })
})
