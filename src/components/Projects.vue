<template>
  <div class="layout">
    <lSidebar className="layout__sidebar"/>
    <main class="grid layout__main">
      <h2>Projects</h2>
      <router-view/>
      <projects-list/>

    </main>
  </div>

</template>
<script>

import lSidebar from './TheSidebar/TheSidebar';
import projectsList from './ListProjects';

export default {
  name: 'Projects',
  components: {
    lSidebar,
    projectsList,
  },
  data () {
    return { }
  },
}</script>
<style lang="sass">
  .layout
    background: hsla(0, 0%, 98%, 1)
    position: relative
    padding-top: 94px
    display: grid
    grid-template-columns: 220px 1fr
    &__sidebar
      padding-top: 48px
    &__main
      padding-top: 32px
</style>
