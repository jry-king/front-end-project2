import Vue from 'vue'
import queue from '@/components/queue'

describe('queue.vue', () => {
  const Constructor = Vue.extend(queue)
  const vm = new Constructor().$mount()
  it('loading', () => {
    expect(vm.loading).to.be.equal(true)
  })


})
