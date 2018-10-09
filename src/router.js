import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Pages/PageHome.vue'
import ProjectsGeneral from '@/components/Pages/Projects/PageProjectsGeneral.vue'
import Projects from '@/components/Pages/Projects/PageProjects.vue'
import ProjectSingle from '@/components/Pages/Projects/PageProjectSingle.vue'
import Prices from '@/components/Pages/PagePrices.vue'
import Contacts from '@/components/Pages/PageContacts.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'current',
  linkActiveClass: '',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'About',
      meta: {title: 'Veronika | About'},
      component: Home
    },
    {
      path: '/projects',
      component: ProjectsGeneral,
      meta: {title: 'Veronika | Projects'},
      children: [
        { path: '',
          name: 'Projects',
          component: Projects,
          meta: {title: 'Veronika | Projects'},
        },
        { path: '/:id',
          name: 'SingleProjectPage',
          component: ProjectSingle,
        },
      ]
    },
    {
      path: '/prices',
      name: 'Prices',
      meta: {title: 'Veronika | Prices'},
      component: Prices,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      meta: {title: 'Veronika | Contact me'},
      component: Contacts,
    },
  ],
})
