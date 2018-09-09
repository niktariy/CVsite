<template>
  <main class="main">
    <section class="section contacts-page">
      <section-heading
        :sectionTitle="pageTitle"
        :sectionDescription="pageDescription"
      />
        <!-- <section-contacts/> -->

      <div>
        <h5>Fell free to get in touch with me at:</h5>
        <ul>
          <li v-for="item in contactList" :key="item.id">
            <a :href="item.linkTo"><em>{{ item.name }}</em></a>
          </li>
        </ul>
      </div>
      <div class="banner">
        <h3 class="banner__title">Lets do the great thigs together!</h3>
      </div>
    </section>
  </main>
</template>

<script>

import sectionHeading from '@/components/Sections/TheSectionHeading';
// import sectionContacts from './SectionContacts/SectionContacts'

export default {
  name: 'ContactsPage',
  components: {
    // sectionContacts,
    sectionHeading,
  },
  data () {
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
  },
}

</script>

<style lang="sass" scoped>
  .contacts-page
</style>
