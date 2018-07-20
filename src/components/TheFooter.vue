<template>
  <footer class="footer" id="footer">
    <div class="footer__container">
      <div class="footer__copy">&copy; All rights reserved</div>
      <ul class="footer__follow follow-list">
        <li v-for="item in followList" :key="item.id"
            class="follow-list__item">
          <a :href="item.link" class="follow-list__link" target="_blank">
            <img :src="'./src/img/socials/'+item.name.toLowerCase()+'.svg'"
                  class="follow-list__icon" />
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
      followList: [{
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
      }],
    }
  },

  computed: {
    getItems(){
      return this.followList;
    }
  },

  methods: {
  },

  mounted: function () {
  },
}
</script>

<style lang="sass" scoped>
.footer
  position: fixed
  bottom: 0
  width: 100%
  overflow: hidden
  z-index: 1
  
  &__container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    background: hsl(0, 0, 93%) url('../img/footer_bg_2.svg') center no-repeat
    background-size: 100%
    height: 100%
    padding: 3% 0

    @media screen and (min-width: 560px) // +breakpoint(560px)
      padding: 25px 0
      flex-direction: row
      justify-content: space-between
  
  a
    display: flex
    align-items: center
    border: none
    height: auto
    margin: 0 2%
    padding-right: 10px
    transition: all 0.18s ease-in-out
    // color: $primary
    // &:hover
      // color: $primary
    // &:active, &:focus
      // color: $primaryDark
    // &:focus
      // outline-color: $primary

.follow-list
  display: flex
  justify-content: space-around
  width: 100%
  margin: 0 -8px
   
  @media screen and (min-width: 560px)  // +breakpoint( 560px)
    width: auto
  
  &__item
    margin: 10px 0
    @media screen and (min-width: 560px)  // +breakpoint( 560px)
      margin: 0

  &__link
    width: 32px
    height: 32px
    padding: 8px
    
    @media screen and (min-width: 560px)  // +breakpoint( 560px)
      width: 40px
      height: 40px
      
    &:hover img
      transform: translateY(-2px)
  
  &__icon
    border-radius: 2px
    width: 100%
    height: auto
    transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1)

</style>
