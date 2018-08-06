<template>
  <div class="layout">
    <div class="grid layout__container">
      <lSidebar className="layout__sidebar"/>
      <main class="layout__main main grid__row">
        <div class="col-xs-1"></div>
        <div class="col-xs-11 section">
          <h2 class="section__title">Projects</h2>
          <router-view/>
          <projects-list/>
        </div>
      </main>
    </div>
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
    &__container
      display: grid
      grid-template-columns: 220px 1fr
    &__sidebar
      padding-top: 48px
    &__main
      padding-top: 32px
</style>
