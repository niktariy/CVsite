<template>
  <form class="filter" :class="className">

    <h6 class="filter__headline"
        :class="headingClass"
        @click="toggleDropDown"
        @keyup.space="toggleDropDown"
    >
      <img class="filter__icon" src="/static/icons/filter.svg" />
      {{ heading }}
      <template v-if="isTagsSelected">
        ({{ selected_tags.length }})
      </template>
      <button v-if="isTagsSelected"
              class="filter__clear"
              type="reset"
              tabindex="0"
              @click="clearFilter"
              @kyeup.enter="clearFilter">
        clear
      </button>
    </h6>
    <div class="filter__list js-dropdown-list" :class="listClassName">
      <label
         class="filter__item"
         v-for="tag in filterItems"
         :for="tag.value"
         :class="[tag.checked ? selectedClass : '']"
         :key="tag.id"
      >
        <input
           tabindex="0"
           type="checkbox"
           :id="tag.value"
           :value="tag.value"
           v-model="selected_tags"
           @focus="addParentFocus"
           @blur="removeParentFocus"
           @change="tag.checked = !tag.checked"
        >
        {{ tag.value }}
      </label>
    </div>
  </form>
</template>

<script>
  import _ from 'lodash';
  import {createHelpers} from 'vuex-map-fields';

  const {mapFields} = createHelpers({
    getterType: 'get_selected_tags',
    mutationType: 'update_selected_tags',
  });

  export default {
    name: 'ProjectsFilter',
    props: {
      className: String,
      headingClass: String,
      listClassName: String
    },
    data() {
      return {
        heading: 'Filters',
        selectedClass: 'filter__item--selected',
        filterItems: [
          { value: 'chat', checked: false },
          { value: 'design', checked: false },
          { value: 'dashboard', checked: false },
          { value: 'development', checked: false },
          { value: 'landing', checked: false },
          { value: 'portfolio', checked: false },
          { value: 'widget', checked: false },
        ]
      }
    },
    methods: {
      addParentFocus(e) {
        let parentClass = e.target.parentNode.classList[0];
        e.target.parentNode.classList.add(parentClass + '--focused')
      },

      removeParentFocus(e) {
        let parentClass = e.target.parentNode.classList[0];
        e.target.parentNode.classList.remove(parentClass + '--focused')
      },

      clearFilter(e) {
        e.preventDefault();
        _.forEach(this.filterItems, (tag) => {
          tag.checked = false
        });
        this.$store.dispatch('clear_filters');
      },

      toggleDropDown(e) {
        e.preventDefault();
        let opener = e.target;
        let dropDownList = document.querySelectorAll('.js-dropdown-list')[0];
        if (opener.closest('.filter__clear')) return;
        opener.classList.toggle('filter__headline--opened');
        dropDownList.classList.toggle('filter__list--opened');
      }
    },
    computed: {
      ...mapFields([
        'selected_tags'
      ]),
      isTagsSelected() {
        return !_.isEmpty(this.selected_tags);
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
        transition: all 0.18s $v--standard-easing
        &:hover, &:focus
          background: $filter_bg-color
          box-shadow: $filter_interactive-shadow
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

      &:hover, &:focus, &--focused
        box-shadow: $filter_interactive-shadow

      &--focused
        outline: thin auto darken($outline-color, 8%)

      &--selected
        background-color: $filter--selected_bg-color
        box-shadow: $filter--selected_interactive-shadow
        color: $filter--selected_text-color
        &:hover, &:focus
          background-color: $secondaryLight
          box-shadow: $filter--selected_interactive-shadow
          color: $filter--selected_text-color
        &.filter__item--focused
          outline-offset: 1px

      input[type="checkbox"]
        display: flex
        opacity: 0
        height: 0
        width: 0

</style>