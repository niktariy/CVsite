<template>
  <section class="section contacts">
    <div class="grid">
      <div class="grid__row">
        <div class="col-xs-12 col-md-6 m-l-auto m-r-auto">
          <section-heading
            :sectionTitle="sectionTitle"
            :sectionDescription="sectionDescription">
          </section-heading>
          <contactForm/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  import sectionHeading from '@/components/Sections/TheSectionHeading';
  import formContact from '@/components/FormContact';

  export default {
    name: 'section-contacts',
    components: {
      sectionHeading,
      'contactForm': formContact,
    },
    data () {
      return {
        sectionTitle: 'Get in touch',
        sectionDescription: 'If you are interested in working with me in a custom project, please let me know below!',
      };
    },
  };
</script>

<style lang="sass" scoped></style>
