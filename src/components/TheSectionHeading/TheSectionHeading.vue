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
</style>
