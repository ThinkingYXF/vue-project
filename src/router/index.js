import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat/Chat'
import List from '@/components/list/List'
import Me from '@/components/me/Me'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'chat',
      component: Chat
    },{
      path: '/chat',
      name: 'chat',
      component: Chat
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
