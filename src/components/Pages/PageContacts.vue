<template>
  <transition name="fade">
    <main class="main">
      <section class="section contacts-page">
        <section-heading
           :sectionTitle="pageTitle"
           :sectionDescription="pageDescription"
        ></section-heading>

        <div style="padding: 16px;text-align: center;">
          <h6>Fell free to get in touch with me at:</h6>
          <ul class="contact-links">
            <li class="contact-links__item link link--primary"
                v-for="item in contactList"
                :key="item.id"
            >
              <a class="contact-links__link"
                 :href="item.linkTo">
                <em>{{ item.name }}</em>
              </a>
            </li>
          </ul>
        </div>
        <!--<div class="banner">-->
        <!--<h3 class="banner__title">Lets do the great thigs together!</h3>-->
        <!--</div>-->
      </section>
    </main>
  </transition>
</template>

<script>

  import sectionHeading from '@/components/Sections/TheSectionHeading';

  export default {
    name: 'ContactsPage',
    components: {
      sectionHeading,
    },
    beforeRouteEnter(to, from, next) {
      console.log('Enter');
      next()
    },
    data() {
      return {
        pageTitle: 'Get in touch',
        pageDescription: 'If you are interested in working with me in a custom project, please let me know below!',
        contactList: [
          {
            name: 'Email',
            linkTo: 'mailto:vervaspro@icloud.com',
          },
          {
            name: 'LinkedIn',
            linkTo: 'https://www.linkedin.com/in/veronika-novikova/'
          },
          {
            name: 'Telegram',
            linkTo: 'tg://resolve?domain=Niktariy',
          }
        ]
      }
    }
  }

</script>

<style lang="sass" scoped>

  .contact-links
    display: flex
    margin: 32px -24px

    &__item
      position: relative
      margin: 0 24px
      font-size: 24px

</style>
