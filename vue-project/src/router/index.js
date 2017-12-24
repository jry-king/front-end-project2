import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import list from '@/components/list'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login_component',
      component: login
    },
    {
      path: '/home',
      name: 'home_component',
      component: list
    }
  ]
})
