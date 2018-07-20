<template>
  <header class="header" id="header">
    <div class="header__wrapper grid"></div>
    <a href="top" class="header__logo">
      <img
        width="60"
        alt="Veronika"
        class="logo"
      />
    </a>
    <div class="section section--tab">
      <div class="burger" @click="openMobileMenu()">
          <div class="burger__icon-container">
            <div class="burger__icon">
                <span class="burger__icon__bun-top burger-bun-top"></span>
                <span class="burger__icon__filling burger-filling"></span>
                <span class="burger__icon__bun-bot burger-bun-bot"></span>
            </div>
        </div>
      </div>
      <nav class="tab tab--valentine">
        <ul class="tab__list" id="header-nav">
          <li class="tab__item" v-for="item in items" :key="item.id">
            <a class="tab__link"
               :class="'tab--'+item.name.toLowerCase()"
            > {{ item.name }} </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'l-header',
  props: ['className'],
  data() {
    return {
      items: [
        { name: 'About' },
        { name: 'Projects' },
        { name: 'Contacts' },
      ],
      menuOpened: false,
    }
  },

  computed: {
    getItems(){
      return this.items;
    }
  },

  methods: {
    stickyHeader() {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          head = document.querySelector(".header"),
          shrinkOn = head.clientHeight;
      if (distanceY >= shrinkOn ) {
        if (head.classList.contains("normal")) {
          head.classList.remove("normal").add("smaller");
        }
      } else {
        if (!head.classList.contains("smaller")) {
          return;
        }
        head.classList.remove("smaller").add("normal");
      }
    },
    
    openMobileMenu() {
      menuOpened = !menuOpened;
      var tabListClasses = document.getElementsByClassName('.tab__list').classList;

        if (menuOpened) {
          tabListClasses.remove('slideOutRight').add('animated slideInRight');
          return
        }
        tabListClasses.remove('slideInRight').add('slideOutRight');
    },
  },

  mounted: function () {
    this.stickyHeader()
  },
}
</script>

<style lang="sass" scoped>

.header
  &, &__wrapper
    display: flex
    align-items: center
  
  justify-content: center
  
  &__wrapper
    justify-content: space-between
  
  padding: 16px 0
  position: fixed
  width: 100%
  will-change: transform, padding, background-color
  background-color: hsl(212, 52%, 96%) //$headerColor
  z-index: 999
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .2)
  transform: translateY(0%)
  transition: all .28s ease-in
  
  &__logo
    font-size: 24px
    a
      color: hsla(330, 88%, 15%, 1) //$secondaryDark
      &:hover, &:focus
        color: hsla(330, 48%, 32%, 1) //$secondary
  
  .tab__item
    &:first-child
      margin-left: 0
    &:last-child
      margin-right: 0
  
  &:not(.smaller)
    .tab__link
      color: #616161 //$textColor
      &:hover
        color: darken(#616161, 8%)
  
  &.smaller
    padding-top: 8px
    padding-bottom: 8px
    background-color: #fff
    background-size: cover
    @media screen and (min-width: 868px) //+breakpoint(868px)
      opacity: 0.9

</style>
