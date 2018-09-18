<template>
  <transition name="fade">
    <div class="layout">
      <div class="grid layout__container">
        <l-sidebar className="layout__sidebar"></l-sidebar>
        <router-view></router-view>
      </div>
    </div>
  </transition>
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
    beforeRouteEnter(to, from, next) {
      console.log('Enter');
      next()
    },
    data() {
      return {
        pageTitle: 'Projects',
        projectOpened: false,
      }
    },
  }

</script>

<style lang="sass">
  @import "./src/style/base/colors"

  .layout
    position: relative
    padding-top: 94px
    background-image: linear-gradient(161deg, $sectionBgColor 40%, change-color($headerColor, $saturation: 48%, $lightness: 88%) 100%)
    background-attachment: fixed
    &__container
      display: grid
      grid-template-columns: 220px 1fr
    &__sidebar, &__main
      padding-top: 32px

</style>
