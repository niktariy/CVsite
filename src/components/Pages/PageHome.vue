<template>
  <transition name="fade">
    <main class="main">
      <section-hero></section-hero>
      <section-about></section-about>
      <section-projects></section-projects>
      <section-contacts></section-contacts>
    </main>
  </transition>
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
    beforeRouteEnter(to, from, next) {
      console.log('Enter');
      next()
    }
  }

</script>

<style lang="sass" scoped>
</style>
