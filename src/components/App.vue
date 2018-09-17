<template>
  <div id="app">
    <l-header></l-header>
    <router-view></router-view>
    <l-footer></l-footer>
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
    methods: {
      goBack() {
        if (window.history.length > 1) {
          this.$router.go(-1);
        } else {
          this.$router.push('/');
        }
      },
    },
  }

</script>

<!-- Global CSS -->
<style lang="sass">

  @import "./src/style/base/index"
  @import "./src/style/components/components"

</style>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }
</style>
