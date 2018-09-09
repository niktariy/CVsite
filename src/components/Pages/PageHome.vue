<template>
  <main class="main">
    <section-hero/>
    <section-about/>
    <section-projects/>
    <section-contacts/>
  </main>
</template>

<script>
  import sectionHero from '@/components/Sections/SectionHero'
  import sectionAbout from '@/components/Sections/SectionAbout'
  import sectionProjects from '@/components/Sections/SectionProjects'
  import sectionContacts from '@/components/Sections/SectionContacts'

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
