<template>
  <form class="filter" :class="className">

    <h6 class="filter__headline" :class="headingClass" @click="toggle_dropdown" @keyup.space="toggle_dropdown" tabindex="0">
      <img class="filter__icon" src="/static/icons/filter.svg" />
      {{ filter_heading }}
      <template v-if="selectedFilter.length !== 0">
        ({{ selectedFilter.length }})
      </template>
      <button
         class="filter__clear"
         tabindex="0"
         v-if="selectedFilter.length !== 0"
         type="reset" @click="clear_filter" @kyeup.enter="clear_filter">
        clear</button>
    </h6>

    <div class="filter__list js-dropdown-list" :class="listClassName">
      <label
         class="filter__item"
         v-for="item in filterItems"
         :for="item.value"
         :class="[item.isSelected ? selectedClass : '']"
         :key="item.id"
         @keyup.space="select_filter_item"
         tabindex="0"
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
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'ProjectsFilter',
    props: {
      className: String,
      headingClass: String,
      listClassName: String
    },
    data() {
      return {
        filter_heading: 'Filters',
        selectedFilter: [],
        selectedClass: 'filter__item--selected',
        filterItems: [
          { value: 'design', isSelected: false },
          { value: 'development', isSelected: false },
          { value: 'portfolio', isSelected: false },
          { value: 'widjet', isSelected: false },
          { value: 'chat', isSelected: false },
          { value: 'landing', isSelected: false },
        ]
      }
    },
    methods: {
      select_filter_item(e) {
        e.target.children[0].click()
      },
      clear_filter(e) {
        e.preventDefault();
        this.selectedFilter = [];
        _.forEach(this.filterItems, (item) => {
          item.isSelected = false
        });
      },
      toggle_dropdown(e) {
        e.preventDefault();
        let opener = e.target;
        let dropdown_list = document.querySelectorAll('.js-dropdown-list')[0];
        if (opener.closest('.filter__clear')) return;
        opener.classList.toggle('filter__headline--opened');
        dropdown_list.classList.toggle('filter__list--opened');
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "./src/style/base/colors"
  @import "./src/style/base/variables"
  @import "./src/style/base/media"

  $filter_text-color: adjust_color($headings-color, $alpha: -0.2)
  $filter--hover_text-color: $headings-color
  $filter--selected_text-color: $White

  $filter_bg-color: $White
  $filter--selected_bg-color: mix($secondaryLight, $text-color--regular, 80%)

  $filter_interactive-shadow: 0 2px 10px 0 rgba($MineShaft, 0.32)
  $filter--selected_interactive-shadow: 0 2px 8px 0 rgba($MineShaft, 0.18)

  .filter
    $spacing: 4px

    &__headline

      +breakpoint-max($medium)
        display: grid
        grid-template-columns: auto 2fr auto
        align-items: start
        padding: 10px ($spacing * 2)
        cursor: pointer
        &--opened
          background: $filter_bg-color

      +md-up
        display: flex
        justify-content: space-between
        align-items: baseline
        padding-right: 24px

    &__icon
      display: grid
      margin-right: $spacing
      width: 16px
      object-fit: contain

      +md-up
        display: none

    &__clear
      display: block
      margin-left: ($spacing * 2)
      background: transparent
      border: none
      font:
        size: 11px
        weight: 600
      line-height: 1.4
      cursor: pointer
      color: $secondaryLight
      text-decoration: underline

    &__list
      margin-left: -#{$spacing}
      margin-right: -#{$spacing}

      +breakpoint-max($medium)
        &--opened
          display: flex
          flex-wrap: wrap
          background: #F5F5F5
          position: absolute
          right: 0
          padding: ($spacing * 4)
          box-shadow: 0 12px 20px 0 rgba($MineShaft,0.2)

      +md-up
        display: flex
        flex-wrap: wrap
        background: none
        padding: 0 24px 0 $sidebar__padding_left


    &__item
      display: block
      margin: 0 $spacing ($spacing * 2)
      padding: $spacing ($spacing * 2)
      background-color: $filter_bg-color
      border-radius: 2px
      font-size: 14px
      cursor: pointer
      color: $filter_text-color
      will-change: background-color, color, box-shadow
      transition-property: background-color, color, box-shadow
      transition-timing-function: $v--standard-easing
      transition-duration: .18s

      &:hover, &:focus
        box-shadow: $filter_interactive-shadow

      &--selected
        background-color: $filter--selected_bg-color
        box-shadow: $filter--selected_interactive-shadow
        color: $filter--selected_text-color
        &:hover
          background-color: $secondaryLight
          box-shadow: $filter--selected_interactive-shadow
          color: $filter--selected_text-color

      input[type="checkbox"]
        display: none

</style>