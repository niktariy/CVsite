<template>
    <main>
      <sectionHero/>
      <sectionAbout/>
      <sectionProjects/>
      <sectionContacts/>
    </main>
</template>

<script>
  import sectionHeading from './TheSectionHeading/TheSectionHeading';
  import sectionHero from './SectionHero/SectionHero'
  import sectionAbout from './SectionAbout/SectionAbout'
  import sectionProjects from './SectionProjects/SectionProjects'
  import sectionContacts from './SectionContacts/SectionContacts'

  export default {
    name: 'Home',
    components: {
      sectionHeading,
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

<!-- Global CSS -->
<style lang="sass">

  @import "./src/style/base/index"
  @import "./src/style/components/button/button"
  @import "./src/style/components/sections/sections"

</style>
