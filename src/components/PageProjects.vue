<template>
  <div class="layout">
    <div class="grid layout__container">
      <lSidebar className="layout__sidebar"/>
      <main class="layout__main main grid__row">
        <div class="col-xs-1"></div>
        <div class="col-xs-11 section">
          <div class="grid__row">
            <h2 class="section__title col-xs-12 col-sm-6">{{ pageTitle }}</h2>
            <div class="controls section__controls col-xs-12 col-sm-6"
              v-show="projectOpened">
              <div class="btn-group">
                <router-link :to="{ name: 'Projects', params: {} }"
                  class="component component-/-primary">
                  <button class="fab fab--flat fab--back">
                    <img src="/img/arrow/arrow-up.svg" />
                  </button>
                </router-link>
                <router-link :to="{ name: 'Projects', params: {} }"
                  class="component component-/-primary">
                  <button class="fab fab--flat fab--prev">
                    <img src="/img/arrow/arrow-left.svg" />
                  </button>
                </router-link>
                <button class="fab fab--flat fab--link">
                  <img src="/img/arrow/link-icon.svg" />
                </button>
                <router-link :to="{ name: 'Projects', params: {} }"
                  class="component component-/-primary">
                  <button class="fab fab--flat fab--next">
                    <img src="/img/arrow/arrow-right.svg" />
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <router-view/>
          <projects-list/>
        </div>
      </main>
    </div>
  </div>

</template>
<script>

import lSidebar from './TheSidebar/TheSidebar';
import projectsList from './ListProjects';
import router from '@/router'

export default {
  name: 'ProjectsPage',
  components: {
    lSidebar,
    projectsList,
  },
  data () {
    return {
      pageTitle: 'Projects',
      projectOpened: false,
    }
  },
}
//
// router.beforeEach((to, from, next) => {
//   this.pageTitle = to.name;
//   next();
// })

</script>

<style lang="sass" scoped="">
  .layout
    // background: hsla(0, 0%, 98%, 1)
    background: hsla(212, 16%, 99%, 1)
    position: relative
    padding-top: 94px
    &__container
      display: grid
      grid-template-columns: 220px 1fr
    &__sidebar
      padding-top: 48px
    &__main
      padding-top: 32px
</style>
