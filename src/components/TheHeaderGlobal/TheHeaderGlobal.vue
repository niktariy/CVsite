<template>
  <fixed-header :fixed.sync="isFixed">
    <header
       class="header" id="header"
       :class="{ 'header--smaller': isFixed }"
       :threshold="300"
    >
      <div class="header__wrapper grid">
        <router-link to="/" class="header__logo" exact>
          <img
             :src="siteLogo"
             height="56"
             alt="Veronika"
             class="logo"
          />
        </router-link>
        <div class="section section--tab">
          <div class="burger" @click="toggle_menu">
            <div class="burger__buns">
              <span class=" burger__bun bun bun--top"></span>
              <span class=" burger__bun bun bun--mid"></span>
              <span class=" burger__bun bun bun--bot"></span>
            </div>
          </div>
          <nav class="tab">
            <ul class="tab__list" id="header-nav" :data-count="getItemsLength">
              <router-link
                 tag="li"
                 class="tab__item"
                 v-for="item in items"
                 :to="item.linkTo"
                 :key="item.id"
              >
                {{ item.name }}
              </router-link>
              <li class="tab__line"><span></span></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </fixed-header>
</template>

<script>
  import FixedHeader from 'vue-fixed-header'
  import toggle_sidebar from "@/mixins/toggle_sidebar";
  import {EventBus} from "@/services/EventBus";

  export default {
    name: 'l-header',
    props: ['className'],
    mixins: [toggle_sidebar],
    components: {
      FixedHeader
    },
    data() {
      return {
        isFixed: false,
        siteLogo: "/img/LetterV.svg",
        items: [
          {
            name: 'About',
            linkTo: '/'
          },
          {
            name: 'Projects',
            linkTo: '/projects'
          },
          {
            name: 'Prices',
            linkTo: '/prices'
          },
          {
            name: 'Contacts',
            linkTo: '/contacts'
          },
        ],
      }
    },
    computed: {
      getItems(){
        return this.items;
      },
      getItemsLength(){
        return this.items.length;
      },

    },
  }
</script>

<style lang="sass" scoped>
  @import 'header'
  @import 'tab'
  @import './src/style/components/burger'
</style>
