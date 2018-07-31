<template>
  <section class="hero">
    <div class="grid">
      <div class="hero__container">
        <header class="hero__header">
          <h1 class="hero__title">Hi! My name is Veronika</h1>
          <h2 class="hero__subtitle">I am design-oriented <pre class="text--accent">front-end developer</pre>
          </h2>
          <div class="hero__target btn-group">
            <div class="component component--primary">
              <button class="btn btn--big">Contact me</button>
            </div>
            <div class="component component--secondary">
              <button class="btn btn--big btn--plain">See my works</button>
            </div>
          </div>
        </header>
        <div class="hero__image-container">
          <img class="hero__image"
               src="/static/img/Veronika.svg"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

  export default {
    name: 'section--hero',
  }
</script>

<style lang="sass" scoped>
  @import "hero"
  
</style>
