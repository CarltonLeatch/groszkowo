import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Router)
Vue.use(axios, VueAxios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'List',
      component: List
    }
  ]
})
