<template>
  <footer class="footer" id="footer">
    <div class="footer__container grid">
      <div class="footer__copy">&copy; All rights reserved</div>
      <ul class="footer__follow follow-list">
        <li v-for="item in followList" :key="item.id"
            class="follow-list__item">
          <a :href="item.link"
             class="follow-list__link"
             target="_blank">
            <img :src="'/img/socials/'+item.name.toLowerCase()+'.svg'"
                 class="follow-list__icon"
                 :alt="item.name" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'l-footer',
    props: ['className'],
    data() {
      return {
        followList: [
          {
            name: 'Instagram',
            link: 'https://www.instagram.com/front_end_tips/',
          }, {
            name: 'Facebook',
            link: 'https://www.facebook.com/Front-end-tips-173015509956433/',
          }, {
            name: 'Twitter',
            link: 'https://www.twitter.com',
          }, {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/veronika-novikova-42524a144/',
          }
        ],
      }
    },

    computed: {
      getItems(){
        return this.followList;
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "footer"
</style>
