<template>
  <div id="app">
    <lHeader/>

    <main>
      <sectionHero/>
      <sectionAbout/>
      <sectionProjects/>
      <sectionContacts/>
    </main>
    
    <lFooter/>
  </div>
</template>

<script>
  import lHeader from './TheHeaderGlobal/TheHeaderGlobal';
  import lFooter from './TheFooter/TheFooter';
  import sectionHeading from './TheSectionHeading/TheSectionHeading';
  import sectionHero from './SectionHero/SectionHero'
  import sectionAbout from './SectionAbout/SectionAbout'
  import sectionProjects from './SectionProjects/SectionProjects'
  import sectionContacts from './SectionContacts/SectionContacts'

  export default {
    name: 'app',
    components: {
      lHeader,
      lFooter,
      sectionHeading,
      sectionHero,
      sectionAbout,
      sectionProjects,
      sectionContacts,
    },
    data () {
      return {

      }
    }
  }

</script>

<!-- Global CSS -->
<style lang="sass">

  @import "./src/style/base/index"
  @import "./src/style/components/button/button"
  @import "./src/style/components/sections/sections"

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    overflow: hidden;
    position: relative;
  }

</style>
