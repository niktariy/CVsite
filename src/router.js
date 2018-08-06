import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/PageHome.vue'
import Projects from '@/components/PageProjects.vue'

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
