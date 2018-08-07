import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/PageHome.vue'
import Projects from '@/components/PageProjects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'V About',
      component: Home
    },
    {
      path: '/projects',
      name: 'V Projects',
      component: Projects
    }
  ]
})
