<template>
  <section class="projects section--projects section">
    <div class="stripes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <section-heading :sectionTitle="sectionTitle"></section-heading>
    <div class="grid">
      <projects-list/>
      <div class="grid__row projects__view-more">
        <div class="component component--secondary m-l-auto m-r-auto">
          <router-link
            class="btn btn--raised"
            type="button"
            tag="button"
            :to="button.linkTo"
          >{{button.label}}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeading from '@/components/Sections/TheSectionHeading';
import projectsList from '@/components/ListProjects';

export default {
  name: 'section-projects',
  components: {
    sectionHeading,
    projectsList,
  },
  data() {
    return {
      sectionTitle: 'My works',
      button: {
        label: 'View all projects',
        linkTo: '/projects',
      }
    }
  },
}
</script>
<style lang="sass" scoped>
@import "section-projects"

</style>
