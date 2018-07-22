<template>
  <div id="app">
    <lHeader/>

    <main>
      <sectionHero/>
    </main>

    <lFooter/>
  </div>
</template>

<script>
  import lHeader from './TheHeaderGlobal/TheHeaderGlobal';
  import lFooter from './TheFooter/TheFooter';
  import sectionHeading from './TheSectionHeading/TheSectionHeading';
  import sectionHero from './SectionHero/SectionHero'
  export default {
    name: 'app',
    components: {
      lHeader,
      lFooter,
      sectionHeading,
      sectionHero,
    }
  }

</script>

<!-- Global CSS -->
<style lang="sass">

  @import "./src/style/base"
  @import "./src/style/grid"

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    overflow: hidden;
    position: relative;
  }

</style>
