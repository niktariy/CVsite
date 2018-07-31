<template>
  <header class="header" id="header">
    <div class="header__wrapper grid">
      <a href="top" class="header__logo">
        <img
          :src="siteLogo"
          height="56"
          width="auto"
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
            <li class="menu__line"><span></span></li>
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
      siteLogo: "static/img/LetterV.svg",
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
  @import 'header'
  @import 'tabs'
</style>
