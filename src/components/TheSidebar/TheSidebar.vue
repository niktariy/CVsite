<template>
  <aside class="sidebar" :class="className">
    <div class="sidebar__container">
      <h5 class="sidebar__heading">Projects</h5>
      <nav class="sidebar-nav sidebar__nav">
        <ul class="sidebar-nav__list">
          <li
            class="sidebar-nav__item"
            v-for="(project, index) in projects"
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
      <form class="sidebar__filter filter">
        <div class="filter__headline">
          <h6 class="sidebar__heading">Filters
            <span
              class="filter__count"
              v-show="selectedFilter.length !== 0"
            >
              ({{ selectedFilter.length }})
            </span>
          </h6>
          <button
            class="filter__clear"
            v-show="selectedFilter.length !== 0"
            type="reset"
          >
            clear all
          </button>
        </div>

        <div class="filter__list">
          <label
            class="filter__item"
            v-for="item in filterItems"
            :for="item.value"
            :class="[item.isSelected ? selectedClass : '']"
            :key="item.id"
          >
            <input
              type="checkbox"
              :id="item.value"
              :value="item.value"
              v-model="selectedFilter"
              @change="item.isSelected = !item.isSelected"
            >
            {{ item.value }}
          </label>
        </div>
      </form>
    </div>

  </aside>
</template>
<script>
export default {
  name: 'l-sidebar',
  props: {
    className: String,
  },
  data() {
    return {
      selectedFilter: [],
      selectedClass: 'filter__item--selected',
      projects: [
        { name: 'NikiFilm' },
        { name: 'Vendor Portal' },
        { name: 'TicketBird' },
        { name: 'Project X' },
        { name: 'Lessons Dashboard' },
        { name: 'Terhi Lesson' },
        { name: 'Schedule' },
      ],
      filterItems: [
        { value: 'design', isSelected: false },
        { value: 'development', isSelected: false },
        { value: 'portfolio', isSelected: false },
        { value: 'widjet', isSelected: false },
        { value: 'chat', isSelected: false },
        { value: 'landing', isSelected: false },
      ],
    }
  },
}
</script>
<style lang="sass" scoped>
  @import "./src/style/base/colors"
  @import "./src/style/base/variables"
  
  .sidebar
    box-shadow: 3px 0 4px 0 rgba($primaryLight, 0.24)
    &__heading
      margin-bottom: 12px
      padding-left: $sidebar__padding_left

  .sidebar-nav
    margin-bottom: 24px
    &__link
      display: block
      margin-bottom: 2px
      padding: 8px 16px 4px
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
