<template>
  <div id="app">
    <lHeader/>
    <div class="bottom">
      To get started, edit <code>./src/components/App.vue</code> and save to reload.<br/>
      <span class="fade">
        Checkout <code>./README.md</code> for more usages.
      </span>
    </div>
  <lFooter/>
  </div>
</template>

<script>
  import lHeader from './TheHeaderGLobal';
  import lFooter from './TheFooter';
  
  export default {
    name: 'app',
    components: {
      lHeader,
      lFooter,
    }
  }
  
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  body {
    font-family: "Avenir Next", sans-serif;
    font-size: 16px;
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

</style>
