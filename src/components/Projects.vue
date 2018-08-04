<template>
  <div class="layout">
    <aside>
      <h3>Projects</h3>
      <ul>
        <li>
          NikiFilm
        </li>
        <li>
          Tiket Bird
        </li>
      </ul>
    </aside>
    <main>
      <h2>Projects</h2>
      <router-view/>

    </main>
  </div>

</template>
<script>
export default {
  name: 'Projects',
  components: {
  },
  data () {
    return { }
  },
}</script>
<style>

</style>
