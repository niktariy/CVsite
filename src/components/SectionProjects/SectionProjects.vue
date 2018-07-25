<template>
  <section class="projects section--projects section">
    <sectionHeading sectionTitle="Projects"></sectionHeading>
    <div class="grid">
      <div class="grid-container">
        <aside v-for="project in projects" :key="project.id"
               class="card">
          <a class="card__link"
             rel="noopener"
             target="_blank"
             tabindex="0">
            <figure class="card__img-container">
              <img class="card__img"
                   alt="project.name"
                   :src="'./src/img/projects/'+project.image"/>
            </figure>
            <h4 class="card__title">{{ project.name }}</h4>
            <p class="card__description">{{ project.description }}</p>
            <span class="card__date">{{ project.date }}</span>
          </a>
        </aside>
      </div>
    </div>
  </section>
</template>
<script>
import sectionHeading from '../TheSectionHeading/TheSectionHeading';

export default {
  name: '',
  components: {
    sectionHeading,
  },
  data() {
    return {
      projects: [
        { name: 'NikiFilm',
          description: 'Photographer portfolio',
          image: 'NikiFilm.png',
          date: '',
          link: ''
        },
        { name: 'Dashboard',
          description: '',
          image: 'desktop_hd.png',
          date: '',
          link: ''
        },
        { name: 'TicketBird',
          description: '',
          image: 'agentConcept.png',
          date: '',
          link: ''
        },
        // { name: '',
        //   description: '',
        //   image: '',
        //   date: '',
        //   link: ''
        // },
      ],
      menuOpened: false,
    }
  },
}
</script>
<style lang="sass" scoped>
@import "./src/style/components/sections/projects-section"
@import "./src/style/components/card"
</style>
