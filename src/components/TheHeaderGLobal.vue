<template>
  <header class="header" id="header">
    <div class="header__wrapper grid">
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

.tab
  &__list
    display: flex
    flex-wrap: wrap
    margin: 0
    padding: 0
    position: relative
    list-style: none
    opacity: 1 !important
    transform: scale3d(1, 1, 0) translate3d(1, 1, 0)

    @media screen and (min-width: 868px)
      animation: none!important

    .menu__line
      border:
        style: solid
        color: transparent
        width: 0 45px
      display: none
      left: 0
      top: 80%
      height: 2px
      width: 130px
      position: absolute
      pointer-events: none
      will-change: transform
      transition: transform 0.5s cubic-bezier(1, 0.01, 0, 1.22)
      span
        background: #a21733 //$linksDark
        width: 100%
        height: 2px
        display: block
        margin: 0 auto
        border-radius: 0 2px
      
  &__link
    font-size: 18px
    display: block
    padding: 16px
    cursor: pointer
    -webkit-touch-callout: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    width: 130px
    vertical-align: middle
    text-align: center
    color: #616161 //$textColor
    will-change: color, font-size
    user-select: none
    &:hover, &:focus
      color: #d94e6a //$links
      outline: none
    @media screen and (max-width: 500px)
      font-size: 18px
    @media screen and (max-height: 500px)
      font-size: 12px
  &__item
    display: flex
    align-items: center
    margin: 0
    
    &--current
      .tab__link
        color: #a21733 //$linksDark
        transition: color .5s
    &:nth-child(1).tab__item--current ~ .menu__line
      transform: translate3d(0, 0, 0)
    &:nth-child(2).tab__item--current ~ .menu__line
      transform: translate3d(100%, 0, 0)
    &:nth-child(3).tab__item--current ~ .menu__line
      transform: translate3d(200%, 0, 0)
    &:nth-child(4).tab__item--current ~ .menu__line
      transform: translate3d(300%, 0, 0)
    &:nth-child(5).tab__item--current ~ .menu__line
      transform: translate3d(400%, 0, 0)

  ///* tab Valentine */

  @media screen and (max-width: 868px)
    &__list
      flex-dir: column
      justify-content: center
      align-items: center
      position: fixed
      right: 0
      top: 0
      width: 100%
      height: 100vh
      z-index: 999
      background-color: mix(hsla(212, 42%, 78%, 1), white, 10%) //$primaryLight
      &:not(.animated)
        visibility: hidden
    &__link
      text-transform: uppercase
      font-weight: 500
      width: auto
    &__item
      position: relative
      &::after
        content: ''
        position: absolute
        width: calc(100% - 32px)
        height: 2px
        left: 0
        right: 0
        bottom: 8px
        margin: 0 auto
        background-color: transparent
        transition: background-color .2s ease
      &--current::after
        background-color: #a21733 //$linksDark
      
    &--valentine
      .menu__line
        display: none !important
      .tab__item
        display: flex
        flex-dir: column
        margin: 0

</style>
