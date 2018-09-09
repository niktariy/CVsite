<template>
  <main class="layout__main">
    <div class="col-xs-1"></div>
    <div class="col-xs-11 section">
      <div class="grid__row">
        <h2 class="section__title col-xs-12 col-sm-6">{{ pageTitle }}</h2>
        <div class="controls section__controls col-xs-12 col-sm-6"
             v-show="projectOpened">
          <div class="btn-group">
            <router-link
              class="component component--primary"
              :to="{ name: 'Projects', params: {} }"
            >
              <button class="fab fab--flat fab--back">
                <img src="/img/arrow/arrow-up.svg" />
              </button>
            </router-link>
            <router-link
              class="component component--primary"
              :to="{ name: 'Projects', params: {} }"
            >
              <button class="fab fab--flat fab--prev">
                <img src="/img/arrow/arrow-left.svg" />
              </button>
            </router-link>
            <a href=""
               class="component component--primary">
              <button class="fab fab--flat fab--link">
                <img src="/img/arrow/link-icon.svg" />
              </button>
            </a>
            <router-link
              class="component component--primary"
              :to="{ name: 'Projects', params: {} }"
            >
              <button class="fab fab--flat fab--next">
                <img src="/img/arrow/arrow-right.svg" />
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>

export default {
  name: 'SingleProjectPage',
  data () {
    return {
      pageTitle: 'Project',
      projectOpened: true,
    }
  },
}</script>
<style lang="sass">

</style>
