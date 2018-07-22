<template>
  <section class="hero">
    <div class="grid">
      <div class="grid__row">
        <header>
          <h1>Hello! I am Veronika Novikova</h1>
          <h3>Design oriented front-end developer</h3>
          <div class="row component component--primary">
            <button class="btn btn--big">Contact me</button>
            <button class="btn btn--big btn--white">See my works</button>
          </div>
        </header>
        <img src="/src/img/Veronika.svg"
             style="width: 96%; transform: translateX(24%);"/>
      </div>
    </div>
  </section>
</template>
<script>
// import sectionHeading from '/src/components/TheSectionHeading/TheSectionHeading';

  export default {
    name: 'section--hero',
    // components: {
    //   sectionHeading,
    // }
  }
</script>

<style lang="sass" scoped>
  @import "hero"
</style>
