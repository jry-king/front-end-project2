import Vue from 'vue'
import forum from '@/components/forum'

describe( 'forum.vue', () => {
  const Constructor = Vue.extend(forum)
  const vm = new Constructor().$mount()
  it('title', () => {
    expect(vm.title).to.be.equal('Write your idea')
  })
  it('newItem', () => {
    expect(vm.newItem).to.be.equal('')
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.mylist h1').textContent)
      .to.equal('Write your idea')
  })
  it('button should exist and be right', () =>{
    expect(vm.$el.querySelector('.mylist .back_button'))
      .to.be.exist
    expect(vm.$el.querySelector('.mylist .back_button').textContent)
      .to.equal('Back to home')
  })
})
