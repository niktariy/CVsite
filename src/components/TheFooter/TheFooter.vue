<template>
  <footer class="footer" id="footer">
    <div class="footer__container grid">
      <div class="footer__copy">&copy; 2018. All rights reserved</div>
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
  @import "./src/style/base/colors"
  @import "./src/style/base/media"

  .footer
    margin-top: auto
    width: 100%
    background: rgba($footer_bg-color, 0.64) no-repeat
    background-position: center 30%
    background-size: cover
    color: invert($footer_bg-color)
    overflow: hidden
    z-index: 1

    &__container
      display: flex
      align-items: center
      flex-direction: column
      justify-content: center
      padding: 3% 0
      height: 100%
      background-size: 100%

      +breakpoint(560px)
        flex-direction: row
        justify-content: space-between
        padding: 25px 0

  .follow-list
    display: flex
    justify-content: space-around
    margin: 0 -8px
    width: 100%

    +breakpoint(560px)
      width: auto

    &__item
      margin: 10px 0
      +breakpoint(560px)
        margin: 0

    &__link
      display: block
      padding: 8px
      height: 48px
      width: 48px

      +breakpoint(560px)
        height: 56px
        width: 56px

      &:hover img
        transform: translateY(-2px)

    &__icon
      border-radius: 2px
      height: auto
      width: 100%
      transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1)

</style>
