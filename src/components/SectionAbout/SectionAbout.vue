<template>
  <section class="about section--about section">
    <section-heading
      :sectionTitle="sectionTitle"
      :sectionDescription="sectionDescription">
    </section-heading>
    <div class="grid">
      <div class="grid__row">
        <div
          class="about__experience-container"
          v-for="info in about"
          :key="info.id"
        >
          <h5>{{ info.question }}?</h5>
          <p class="about__experience-item"
          >{{ info.answer }}</p>
        </div>
      </div>

      <div class="about__skills-list">
        <h3 class="about__subtitle">
          {{ sectionSubTitle }} <em>{{ sectionSubTitle_emphasis }}</em>
        </h3>
        <div class="grid__container grid__container--two">

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
import sectionHeading from '../Sections/TheSectionHeading';

export default {
  name: 'section--about',
  components: {
    sectionHeading,
  },
  data() {
    return {
      about: [
        {question: 'How did you get into this field',
         answer: 'I fell in love with Web development even in college, when we made sites on mock-ups, in fact, that’s how I came to this exorbitant world of IT.'},
        {question: 'What skills do you think are most important for someone trying to break into this space',
         answer: 'The most important skills are: problem solving and analytical scills, a passion for UI & UX, and stay calm under pressure. That\'s why I really like what I’m doing.'},
        {question: 'What is the best part about working in this field',
         answer: 'Also I have an account where I’m share my ideas and development tips with those who are interested.'},
        // {question: '',
        //  answer: ''},
      ],
      sectionTitle: 'About me',
      sectionDescription: 'Experience and Skills',
      sectionSubTitle: 'What I know how to do ',
      sectionSubTitle_emphasis: 'well.',
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
            {item: 'Proficien in mobile-responsive sites;'},
            {item: 'Properly structured code with appropriate semantic.'},
          ],
          image: 'adaptive_development',
        },
        { name: 'Creative process',
          description: [
            {item: 'Have a good understanding of visual and UX design principles;'},
            {item: 'Designer-like mindset which reflected through semantic HTML and CSS;'},
            {item: 'Support the design and development process through creation and improvement of style guides and pattern libraries.'},
          ],
          image: 'creative_process'
        },
        { name: 'Personal skills',
          description: [
            {item: 'Ability to solve both creative and logical issues;'},
            {item: 'Working as a mentor on one cool web portal;'},
            {item: 'Accurate, responsible, beauliful :)'},
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
