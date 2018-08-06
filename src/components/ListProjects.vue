<template>
  <div class="grid__container grid__container--three">
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
               :src="'/img/projects/'+project.image"/>
        </figure>
        <h4 class="card__title">{{ project.name }}</h4>
        <p class="card__description">{{ project.description }}</p>
        <span class="card__date">&ndash; {{ project.date }}</span>
      </a>
    </aside>
    <!-- TODO -->
  </div>
</template>

<script>
export default {
  name: 'projects-list',
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
          description: 'Vendor Portal description',
          image: 'VendorPortal.png',
          date: '2017-06-06T18:00:00.000Z',
          link: ''
        },
        { name: 'TicketBird',
          description: 'TicketBird description',
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
        { name: 'Schedule',
          description: 'Schedule description',
          image: 'Schedule.png',
          date: '2017-06-06T18:00:00.000Z',
          link: 'projects/project/4'
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
@import "./src/style/components/card"
</style>
