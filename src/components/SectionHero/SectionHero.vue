<template>
  <section class="hero">
    <div class="grid">
      <div class="hero__container">
        <header>
          <h2>Hi! I am Veronika Novikova</h2>
          <h1>Design oriented<br/>
            <span>Front-end developer</span>
          </h1>
          <div class="btn-group">
            <div class="component component--primary">
              <button class="btn btn--big">Contact me</button>
            </div>
            <div class="component component--secondary">
              <button class="btn btn--big btn--plain">See my works</button>
            </div>
          </div>
        </header>
        <img class="hero__image"
             src="/src/img/Veronika.svg"/>
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
