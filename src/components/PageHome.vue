<template>
  <main class="main">
    <section-hero/>
    <section-about/>
    <section-projects/>
    <section-contacts/>
  </main>
</template>

<script>
  import sectionHero from './Sections/SectionHero'
  import sectionAbout from './Sections/SectionAbout'
  import sectionProjects from './Sections/SectionProjects'
  import sectionContacts from './Sections/SectionContacts'

  export default {
    name: 'HomePage',
    components: {
      sectionHero,
      sectionAbout,
      sectionProjects,
      sectionContacts,
    },
    data () {
      return {

      }
    },
  }

</script>

<style lang="sass" scoped>
</style>
