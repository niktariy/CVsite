<template>
  <header class="section__header">
    <h2 class="section__title title" :class="sectionLink">{{ sectionTitle }}</h2>
    <p class="section__description" v-if="sectionDescription">{{ sectionDescription }}</p>
    <hr>
  </header>
</template>

<script>
export default {
  name: 'section-heading',
  props: {
    sectionTitle: String,
    sectionLink: String,
    sectionDescription: String,
  },
}
</script>

<style lang="sass">
  @import "./src/style/base/colors"
  @import "./src/style/base/variables"

  .section
    &__header
      display: flex
      flex-direction: column
      align-items: center
      text-align: center

    &__title
      color: darken($textColor, 18%)
      margin-bottom: 16px
      text-transform: capitalize
      text-shadow: 2px 1px 7px #fff
    &__description
      font-size: $font--16-20
      line-height: 1.4
      margin-bottom: 16px
      max-width: 600px
      padding: 0 16px

</style>
