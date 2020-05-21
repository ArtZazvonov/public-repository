import Vue from 'vue'
import Router from 'vue-router'
import custom from '@/components/custom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'custom',
      component: custom
    }
  ]
})
