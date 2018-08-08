import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/PageHome.vue'
import Projects from '@/components/PageProjects.vue'
import ProjectPage from '@/components/PageProjectSingle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'current',
  linkActiveClass: '',
  routes: [
    {
      path: '/',
      name: 'About',
      meta: {title: 'V About'},
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      meta: {title: 'V Projects'},
      component: Projects,
      children: [{
        path: 'project/:id',
        component: ProjectPage,
      }]
    }
  ]
})
