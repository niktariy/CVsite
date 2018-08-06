import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
})
