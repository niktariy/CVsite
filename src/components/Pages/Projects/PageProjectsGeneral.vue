<template>
  <div class="layout">
    <div class="grid layout__container">
      <lSidebar className="layout__sidebar"/>
      <router-view></router-view>
    </div>
  </div>

</template>
<script>

import lSidebar from '@/components/TheSidebar/TheSidebar';
import projectsList from '@/components/ListProjects';
import router from '@/router'

export default {
  name: 'ProjectsPage',
  components: {
    lSidebar,
    projectsList,
  },
  data () {
    return {
      pageTitle: 'Projects',
      projectOpened: false,
    }
  },
}
//
// router.beforeEach((to, from, next) => {
//   this.pageTitle = to.name;
//   next();
// })

</script>

<style lang="sass">
  .layout
    background: hsla(212, 16%, 99%, 1)
    position: relative
    padding-top: 94px
    &__container
      display: grid
      grid-template-columns: 220px 1fr
    &__sidebar
      padding-top: 48px
    &__main
      padding-top: 32px
</style>
