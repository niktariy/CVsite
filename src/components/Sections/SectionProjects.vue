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
      <projects-list :projects="sortedProjects"></projects-list>
      <div class="grid__row projects__view-more">
        <base-button
           :isButtonLink="true"
           :buttonLinkTo="button.linkTo"
           :componentType="button.componentType"
           :label="button.label"
           :modifier="button.modifier"
        ></base-button>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeading from '@/components/Sections/TheSectionHeading';
import projectsList from '@/components/ListProjects';
import BaseButton from "../UI/BaseButton";

export default {
  name: 'section-projects',
  components: {
    BaseButton,
    sectionHeading,
    projectsList,
  },
  data() {
    return {
      sectionTitle: 'My works',
      button: {
        componentType: '--secondary',
        label: 'View all projects',
        linkTo: '/projects',
        modifier: '--raised'
      }
    }
  },
  computed: {
    allProjects() {
      return this.$store.getters.load_projects;
    },
    sortedProjects() {
      return _.orderBy(this.allProjects, ['date'], ['desc'])
    }
  }
}
</script>
<style lang="sass" scoped>
/*---------------- Projects Section ----------------*/
@import "./src/style/base/colors"

.stripes
  display: grid
  grid: repeat(5, 20%)/repeat(10, 1fr)
  position: absolute
  top: 0
  height: 100%
  width: 100%
  transform: skewY(-12deg)
  transform-origin: 0
  z-index: -1
  span
    &:nth-child(1)
      grid-column: span 3
    &:nth-child(2)
      grid-area: 3 / span 5 / auto / -1
    &:nth-child(3)
      grid-row: 4
      grid-column: span 5
    &:nth-child(4)
      grid-area: 4 / span 5 / auto / -1
    &:nth-child(5)
      grid-area: auto / 1 / -1 / -1

.projects
  min-height: 100vh
  overflow: hidden
  background-color: $section_bg-color
  &__view-more
    margin-top: 32px
    text-align: center
    display: flex
    justify-content: center

</style>
