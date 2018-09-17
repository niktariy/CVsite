<template>
  <main class="layout__main main grid__row">
    <div class="col-xs-1"></div>
    <header class="col-xs-11">
      <h2 class="section__title">{{ pageTitle }}</h2>
    </header>
    <div class="col-xs-1"></div>
    <section class="col-xs-11 section main__section">
      <div class="grid__row">
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
      <projects-list></projects-list>
    </section>
  </main>
</template>
<script>

import lSidebar from '@/components/TheSidebar/TheSidebar';
import projectsList from '@/components/ListProjects';
import router from '@/router'

export default {
  name: 'ProjectsPage',
  components: {
    lSidebar,
    projectsList,
  },
  data() {
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

  .main
    &__section
      padding-top: 16px
      padding-bottom: 32px
      background: transparent
</style>
