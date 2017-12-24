import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import comment from '@/components/comment'
import food_review from '@/components/food_review'
import Element from 'element-ui'
Vue.use(Element, { size: 'small' })
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
      component: home
    },
    {
      path: '/comment',
      name: 'comment_component',
      component: comment
    },
    {
      path: '/Food_review',
      name: 'foodreview_component',
      component: food_review
    }
  ]
})
