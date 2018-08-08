<template>

  <header class="header" id="header">
    <div class="header__wrapper grid">
      <router-link to="/" class="header__logo" exact>
        <img
          :src="siteLogo"
          height="56"
          width="auto"
          alt="Veronika"
          class="logo"
        />
      </router-link>
      <div class="section section--tab">
        <div class="burger" @click="openMobileMenu()">
            <div class="burger__buns">
                <span class=" burger__bun bun bun--top"></span>
                <span class=" burger__bun bun bun--mid"></span>
                <span class=" burger__bun bun bun--bot"></span>
          </div>
        </div>
        <nav class="tab tab--valentine">
          <ul class="tab__list" id="header-nav">
            <router-link
              tag="li"
              class="tab__item"
              v-for="item in items"
              :to="item.linkTo"
              :key="item.id"
            > {{ item.name }}
            </router-link>
            <li class="tab__line"><span></span></li>
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
      siteLogo: "/img/LetterV.svg",
      items: [
        { name: 'About',
          linkTo: '/'
        },
        { name: 'Projects',
          linkTo: '/projects'
        },
        { name: 'Contacts',
          linkTo: '/'
        },
      ],
      menuOpened: false,
      isFixed: false,
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
      var tabListClasses = document.getElementById('header-nav').classList;

        if (!this.menuOpened) {
          tabListClasses.remove('slideOutRight');
          tabListClasses.add('animated','slideInRight');
          this.menuOpened = true;
          return;
        }
        tabListClasses.remove('animated','slideInRight')
        tabListClasses.add('slideOutRight');
        this.menuOpened = false;
    },
  },

  mounted: function () {
    this.stickyHeader()
  },
}
</script>

<style lang="sass" scoped>
  @import 'header'
  @import 'tab'
  @import './src/style/components/burger'
</style>
