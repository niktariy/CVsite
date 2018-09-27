<template>
  <section class="hero">
    <div class="grid">
      <div class="hero__container">
        <header class="hero__header">
          <h1 class="hero__title">{{sectionTitle}}</h1>
          <h2 class="hero__subtitle">I am design-oriented <span class="text--accent">front-end developer</span>
          </h2>
          <div class="hero__target btn-group">
            <base-button
               v-for="button in heroTargetButtons"
               :key="button.id"
               :isButtonLink="true"
               :buttonLinkTo="button.linkTo"
               :componentType="button.componentType"
               :className="button.className"
               :label="button.label"
               :modifier="button.modifier"
            ></base-button>
          </div>
        </header>
        <div class="hero__image-container">
          <img class="hero__image"
               src="/img/Veronika.svg"
               alt="Veronika"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BaseButton from "../UI/BaseButton";

  export default {
    components: {BaseButton},
    name: 'section--hero',
    data() {
      return {
        sectionTitle: "Hi! My name is Veronika",
        heroTargetButtons: [
          {
            label: 'Contact me',
            componentType: '--primary',
            className: 'btn--big',
            modifier: '--raised',
            linkTo: '/contacts',
          },
          {
            label: 'See my works',
            componentType: '--secondary',
            className: 'btn--big btn--flat',
            modifier: '--raised',
            linkTo: '/projects',
          },
        ],
      }
    }
  }
</script>

<style lang="sass" scoped>
/*---------------- Hero Section ----------------*/
@import "./src/style/base/colors"
@import "./src/style/base/media"

.hero
  position: relative
  padding-bottom: 48px
  padding-top: 4vw
  background: $section_bg-color
  text-align: center
  overflow-x: hidden
  z-index: 202!important

  +md-up
    padding-bottom: 96px
    text-align: left

  &__container
    position: relative
    padding: 48px 0
    overflow-y: visible
    +md-up
      display: flex
      align-items: flex-start

  &__header
    +md-up
      width: 45%

    h1
      +md-up
        white-space: nowrap
        max-width: 100%
        overflow: visible
    h2
      font-weight: 400

  &__target
    justify-content: center
    margin-top: 32px
    +sm-up
      margin-top: 40px
    +md-up
      justify-content: flex-start

  &__image-container
    margin-top: 48px
    user-select: none
    pointer-events: none
    +md-up
      margin-top: 8vh
      right: 0
      flex: 1

  &__image
    margin: 0 auto
    width: 90%
    +xs-only
      width: 120%
      transform: translateX(16%)
    +md-up
      margin: 0 0 0 -10%
      width: 110%

</style>
