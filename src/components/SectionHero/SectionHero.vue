<template>
  <section class="hero">
    <div class="grid">
      <div class="hero__container">
        <header class="hero__header">
          <h1 class="hero__title">Hi! My name is Veronika</h1>
          <h2 class="hero__subtitle">I am design-oriented <pre class="text--accent">front-end developer</pre>
          </h2>
          <div class="hero__target btn-group">
            <div
              v-for="(button, index) in targetButtons"
              class="component"
              :key="index"
              :class="'component--'+button.componentType"
            >
              <router-link
                class="btn btn--big"
                type="button"
                tag="button"
                :to="button.linkTo"
                :class="button.className"
              >
                {{button.label}}
              </router-link>
            </div>
          </div>
        </header>
        <div class="hero__image-container">
          <img class="hero__image"
               src="/img/Veronika.svg"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

  export default {
    name: 'section--hero',
    data() {
      return {
        sectionTitle: "Hi! My name is Veronika",
        targetButtons: [
          {
            label: 'Contact me',
            componentType: 'primary',
            linkTo: '/contacts',
          },
          {
            label: 'See my works',
            componentType: 'secondary',
            className: 'btn--plain',
            linkTo: '/projects',
          },
        ],
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "section-hero"

</style>
