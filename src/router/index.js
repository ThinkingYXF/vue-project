import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import List from '@/views/list/List'
import Me from '@/views/me/Me'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/list',
      name: 'list',
      component: List
    },{
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
