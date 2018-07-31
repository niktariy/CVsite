<template>
  <section class="projects section--projects section">
    <div class="stripes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <sectionHeading sectionTitle="Projects"></sectionHeading>
    <div class="grid">
      <div class="grid-container">
        <!-- TODO: create a single card component template -->
        <aside v-for="project in projects" :key="project.id"
               class="card">
          <a class="card__link"
             rel="noopener"
             target="_blank"
             tabindex="0">
            <figure class="card__img-container">
              <img class="card__img"
                   alt="project.name"
                   :src="'/static/img/projects/'+project.image"/>
            </figure>
            <h4 class="card__title">{{ project.name }}</h4>
            <p class="card__description">{{ project.description }}</p>
            <span class="card__date">&ndash; {{ project.date }}</span>
          </a>
        </aside>
        <!-- TODO -->
      </div>
      <div class="grid__row">
        <div class="component component--secondary">
          <button class="btn component__centered" type="button">View all projects</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeading from '../TheSectionHeading/TheSectionHeading';

export default {
  name: 'projects-section',
  components: {
    sectionHeading,
  },
  data() {
    return {
      projects: [
        { name: 'NikiFilm',
          description: 'Photographer portfolio',
          image: 'NikiFilm.png',
          date: '2017-06-06T18:00:00.000Z',
          link: ''
        },
        { name: 'Vendor Portal',
          description: '',
          image: 'VendorPortal.png',
          date: '2017-06-06T18:00:00.000Z',
          link: ''
        },
        { name: 'TicketBird',
          description: '',
          image: 'agentConcept.png',
          date: '2017-06-06T18:00:00.000Z',
          link: ''
        },
        { name: 'Project X',
          description: 'Project X description',
          image: 'project_x.png',
          date: '2017-06-06T18:00:00.000Z',
          link: ''
        },
        { name: 'Lessons Dashboard',
          description: 'Design for courses platfom',
          image: 'desktop_hd.png',
          date: '2017-06-06T18:00:00.000Z',
          link: ''
        },
        { name: 'Terhi Lesson',
          description: 'Design for courses platfom',
          image: 'terhi_next_lesson.png',
          date: '2017-06-06T18:00:00.000Z',
          link: ''
        },
        // { name: 'Project Name',
        //   description: 'Project description',
        //   image: 'desktop_hd.png',
        //   date: '2017-06-06T18:00:00.000Z',
        //   link: 'projects/project/4'
        // },
      ],
    }
  },
}
</script>
<style lang="sass" scoped>
@import "projects-section"

//TODO: create a single card component template
@import "./src/style/components/card"
</style>
