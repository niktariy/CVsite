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

<!-- Global CSS -->
<style lang="sass">

*
  margin: 0
  padding: 0
  box-sizing: border-box
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

html
  font:
    weight: normal
    size: 16px
    family: 'Avenir Next LT Pro', 'Helvetica', sans
  color: darken(#616161, 18%) //$textColor
  cursor: default
  overflow-x: hidden
  min-width: 300px

ul, nav
  list-style: none
  margin: 0
  padding: 0

a
  color: inherit
  -webkit-touch-callout: none

a, button
  cursor: pointer
  text-decoration: none
  opacity: 0.9
  transition-property: color, box-shadow, background, opacity
  transition-timing-function: cubic-bezier(.4, 0, .2, 1)
  transition-duration: .28s
  &:hover
    opacity: 1

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

</style>
