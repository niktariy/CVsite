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
               :alt="project.name"
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
  name: 'projectsList',
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

@import "./src/style/base/colors"
@import "./src/style/base/media"
@import "./src/style/base/variables"

.card
  cursor: pointer
  position: relative
  height: calc(100% - 8px)
  width: 100%

  &__link
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    position: relative
    height: 100%
    opacity: 1
    will-change: background-color, box-shadow
    transition: box-shadow 0.24s $v--ease-in
    border-radius: 3px
    background-color: rgba($white, .72)
    &:hover, &:focus
      box-shadow: 0 8px 24px 0 rgba($secondaryDark, 0.16)
    +xs-only
      box-shadow: 0 4px 8px 0 rgba($secondaryDark, 0.16)

  &__img-container
    margin-bottom: 16px
    overflow: hidden
    +xs-only
      max-height: 400px
  &__img
    object-fit: contain
    object-position: top
    height: auto
    width: 100%
  &__title
    text-align: center
    margin-bottom: 8px
  &__date
    margin-bottom: 12px

</style>
