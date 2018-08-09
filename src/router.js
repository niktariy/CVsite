import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/PageHome.vue'
import Projects from '@/components/PageProjects.vue'
import ProjectPage from '@/components/PageProjectSingle.vue'
import Contacts from '@/components/PageContacts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'current',
  linkActiveClass: '',
  routes: [
    {
      path: '/',
      name: 'About',
      meta: {title: 'Veronika | About'},
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      meta: {title: 'Veronika | Projects'},
      component: Projects,
      children: [{
        path: 'project/:id',
        component: ProjectPage,
      }]
    },
    {
      path: '/contacts',
      name: 'Contacts',
      meta: {title: 'Veronika | Contact me'},
      component: Contacts,
    }
  ],
})
