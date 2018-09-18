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

/*---------------- About Section ----------------*/
@import "./src/style/base/colors"
@import "./src/style/base/media"
@import "./src/style/base/variables"

.about
  background-color: hsla(249, 47%, 98%, 1)

  &__subtitle
    font-weight: 800
    text-align: center

  &__experience-container
    margin: 0 auto
    max-width: 80%
    width: 100%
    text-indent: 16px

  &__experience-item
    margin-bottom: 6px
    font-size: $font--17-22
    text-align: left
    font-style: italic

  &__skills-list
    $sideSpacing: 16px
    padding: 24px $sideSpacing
    margin-top: ($sideSpacing * 2)
    margin-left: ($sideSpacing * -1)
    margin-right: ($sideSpacing * -1)
    background: $white
    box-shadow: 0 10px 24px 0 rgba($primaryDark, .2)
    +sm-up
      $sideSpacing: 24px
      padding: $sideSpacing
      margin-left: ($sideSpacing * -1)
      margin-right: ($sideSpacing * -1)

    +md-up
      padding: ($sideSpacing * 2)

  &__skill
    display: flex
    +xs-only
      align-items: center
      flex-direction: column
    & figure
      min-width: $skill__icon-size
      max-width: $skill__icon-size
      +sm-up
        margin-right: 16px
      +xl-up
        min-width: 104px
        max-width: 104px
      & img
        height: auto
        width: 100%
        object-fit: contain

    & i
      height: 90px
      width: 90px
      color: $primary
      font-size: 90px
    & h4
      margin: 0 0 8px
      line-height: 1.25
      +xs-only
        text-align: center
    & div
      +xs-only
        max-width: 350px
    & p
      position: relative
      margin: 0
      font-size: $font--16-20

    @media (max-width: 1000px)
      &:last-child
        margin-bottom: 0

</style>
