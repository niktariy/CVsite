<template>
  <section class="projects section--projects section">
    <div class="stripes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <sectionHeading sectionTitle="Projects"></sectionHeading>
    <div class="grid">
      <projects-list/>
      <div class="grid__row projects__view-more">
        <div class="component component--secondary m-l-auto m-r-auto">
          <router-link
            class="btn"
            type="button"
            tag="button"
            :to="{name: 'Projects'}"
          >View all projects</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeading from '../Sections/TheSectionHeading';
import projectsList from '../ListProjects';

export default {
  name: 'section-projects',
  components: {
    sectionHeading,
    projectsList,
  },
  data() {
    return { }
  },
}
</script>
<style lang="sass" scoped>
@import "section-projects"

</style>
