<template>
  <main class="layout__main main grid__row">
    <div class="col-md-1"></div>
    <header class="col-xs-12 col-md-11">
      <h2 class="section__title">{{ pageTitle }}</h2>
    </header>
    <div class="col-md-1"></div>
    <section class="col-xs-12 col-md-11 section main__section">
      <projects-list :projects="sortedProjects"></projects-list>
    </section>
  </main>
</template>
<script>

import lSidebar from '@/components/TheSidebar/TheSidebar';
import projectsList from '@/components/ListProjects';

export default {
  name: 'ProjectsPage',
  components: {
    lSidebar,
    projectsList,
  },
  data() {
    return {
      pageTitle: 'Projects',
      projectOpened: false,
    }
  },
  computed: {
    filteredProjects() {
      return this.$store.getters.load_filtered_projects;
    },
    sortedProjects() {
      return _.orderBy(this.filteredProjects, ['date'], ['desc'])
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('clear_filters');
    next()
  },
}

</script>

<style lang="sass" scoped="">

  .main
    &__section
      padding-top: 16px
      padding-bottom: 32px
      background: transparent
</style>
