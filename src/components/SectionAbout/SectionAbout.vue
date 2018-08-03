<template>
  <section class="about section--about section">
    <sectionHeading
      sectionTitle="About me"
      sectionDescription="Experience and Skills"></sectionHeading>
    <div class="grid">
      <div class="about__info">
        <p v-for="info in about">
          {{ info.item }}
        </p>
      </div>
      <div class="about__skills-list">

        <div class="grid-container">

          <aside v-for="skill in skills" :key="skill.id"
                 class="about__skill">
            <figure class="">
              <img class=""
                   alt="skill.name"
                   :src="'/img/skills/'+ skill.image +'.svg'"/>
            </figure>
            <div>
              <h4 class="">{{ skill.name }}</h4>
              <div class="">
                <p v-for="descr in skill.description">
                  {{ descr.item }}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import sectionHeading from '../TheSectionHeading/TheSectionHeading';

export default {
  name: 'section--about',
  components: {
    sectionHeading,
  },
  data() {
    return {
      about: [
        {item: 'In 2015 I graduated from the radio engineering college with the specialty of «technician programmer», and now I get higher education in the specialty «Economics of electronic business».'},
        {item: 'I fell in love with Web development even in college, when we made sites on mock-ups, in fact, that’s how I came to this exorbitant world of IT.'},
        {item: 'I really like what I’m doing.'},
        {item: 'Also I have an account where I’m share my ideas and development tips with those who are interested.'},
        // {item: '2+ years of software development experience'},
      ],
      skills: [
        { name: 'App Development',
          description: [
            {item: 'Exellent HTML5/CSS3 knowledge, CSS Preprocessors, BEM metodology;'},
            {item: 'Experience in JavaScript libraries/frameworks such as AngularJS, Vue.js, React.js;'},
            {item: 'Code landing pages, single page applications and e-commerce sites.'},
          ],
          image: 'app_development',
        },
        { name: 'Adaptive Development',
          description: [
            {item: 'Understanding principles of web & mobile development;'},
            {item: 'Proficien in mobile-responsive sites.'},
            {item: 'Properly structured code with appropriate semantic'},
          ],
          image: 'adaptive_development',
        },
        { name: 'Creative process',
          description: [
            {item: 'Have a good understanding of visual and UX design principles;'},
            {item: 'Support the design and development process through creation and improvement of style guides and pattern libraries.'},
          ],
          image: 'creative_process'
        },
      ],
    }
  },
}
</script>
<style lang="sass" scoped>
@import "section-about"
</style>
