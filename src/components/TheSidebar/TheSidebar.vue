<template>
  <aside class="sidebar" :class="className">
    <div class="sidebar__container">
      <div class="sidebar__list">
        <h5 :class="headingClass">Projects</h5>
        <nav class="sidebar-nav sidebar__nav sidebar__dropdown">
          <ul class="sidebar-nav__list">
            <li
               class="sidebar-nav__item"
               v-for="(project, index) in all_projects"
               :key="index"
            >
              <router-link :to="'/projects/project:'+index"
                           class="sidebar-nav__link"
              >
                {{ project.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <projects-filter
         :className="filterClass"
         :headingClass="headingClass"
         :listClassName="dropdownClass"
      ></projects-filter>
    </div>

  </aside>
</template>

<script>
  import ProjectsFilter from "@/components/UI/ProjectsFilter";

  export default {
    components: {
      ProjectsFilter
    },
    name: 'l-sidebar',
    props: ['className'],
    data() {
      return {
        headingClass: 'sidebar__heading',
        filterClass: 'sidebar__filter',
        dropdownClass: 'sidebar__dropdown',
      }
    },
    computed: {
      all_projects() {
        return this.$store.getters.load_projects;
      }
    }
  }
</script>

<style lang="sass" >
  @import "./src/style/base/colors"
  @import "./src/style/base/variables"
  @import "./src/style/base/media"

  .sidebar
    position: relative
    padding: 24px 6%
    +breakpoint-max($medium)
      position: absolute
      top: 32px
      right: 0
      padding: 0
      z-index: 333
      &__list
        display: none

    &__heading
      display: flex
      align-items: center
      padding-left: $sidebar__padding_left
      height: 100%

    &__container
      display: flex
      +md-up
        flex-direction: column
        position: fixed
        padding: 16px 0
        max-width: 220px
        border-right: 2px solid rgba($primaryLight, 0.24)
      & > *
        flex: 1

    &__dropdown
      margin-top: 12px
      +breakpoint-max($medium)
        display: none

  .sidebar-nav
    margin-bottom: 24px

    &__link
      display: block
      padding: 8px 16px 4px
      margin-bottom: 2px
      background-color: transparent
      border-radius: 2px 0 0 2px
      border-bottom: 2px solid transparent
      will-change: background-color, border
      transition: border 0.18s $v--ease-out, background-color 0.18s $v--ease-out

      &:hover
        background-color: adjust_color($secondaryLight, $alpha: -0.8)
        border-bottom-color: adjust_color($secondaryDark, $alpha: -0.8)
      &.current
        background-color: adjust_color($secondaryLight, $alpha: -0.7)
        border-bottom-color: $secondaryDark
</style>
