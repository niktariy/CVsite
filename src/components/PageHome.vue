<template>
    <main>
      <section-hero/>
      <section-about/>
      <section-projects/>
      <section-contacts/>
    </main>
</template>

<script>
  import sectionHero from './SectionHero/SectionHero'
  import sectionAbout from './SectionAbout/SectionAbout'
  import sectionProjects from './SectionProjects/SectionProjects'
  import sectionContacts from './SectionContacts/SectionContacts'

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
