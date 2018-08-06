<template>

  <header class="header" id="header">
    <div class="header__wrapper grid">
      <router-link to="/" class="header__logo">
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
            <li class="tab__item" v-for="item in items" :key="item.id">
              <router-link
                class="tab__link"
                :to="item.linkTo"
                :class="'tab--'+item.name.toLowerCase()"
              > {{ item.name }}
              </router-link>
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

        if (this.menuOpened) {
          tabListClasses.remove('slideOutRight');
          tabListClasses.add('animated','slideInRight');
          this.menuOpened = false;
          return;
        }
        tabListClasses.remove('animated','slideInRight')
        tabListClasses.add('slideOutRight');
        this.menuOpened = true;
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
  @import './src/style/components/burger'
</style>
