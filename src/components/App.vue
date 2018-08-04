<template>
  <div id="app">
    <lHeader/>
    <router-view/>
    <lFooter/>
  </div>
</template>

<script>
  import lHeader from './TheHeaderGlobal/TheHeaderGlobal';
  import lFooter from './TheFooter/TheFooter';

  export default {
    name: 'app',
    components: {
      lHeader,
      lFooter,
    },
    data () {
      return {

      }
    },
    methods: {
      // goBack() {
      //   if (window.history.length > 1) {
      //     this.$router.go(-1);
      //   } else {
      //     this.$router.push('/');
      //   }
      // },
    },
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
