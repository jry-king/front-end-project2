import Vue from 'vue'
import home from '@/components/home'

describe('home.vue', () => {
  const Constructor = Vue.extend(home)
  const vm = new Constructor().$mount()
  it('has a methods object', () => {
    expect(typeof home.methods).to.eql('object')
  })
  it('zhujiemian', () => {
    expect(vm.zhujiemian).to.be.equal(true)
  })
  it('jipaifan', () => {
    expect(vm.jipaifan).to.be.equal(false)
  })
  it('shutiao', () => {
    expect(vm.shutiao).to.be.equal(false)
  })
  it('niuroulamian', () => {
    expect(vm.niuroulamian).to.be.equal(false)
  })
  it('choudoufu', () => {
    expect(vm.choudoufu).to.be.equal(false)
  })
  it('input', () => {
    expect(vm.input).to.be.equal('')
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.faxian').textContent)
      .to.equal('发现')
  })
  it('function：handleCommand', () => {
    vm.handleCommand('zhujiemian');
    expect(vm.zhujiemian).to.equal(true)
  })
})

