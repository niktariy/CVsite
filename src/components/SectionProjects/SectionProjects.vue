<template>
  <section class="projects section--projects section">
    <header class="grid">
      <h2>Projects</h2>
    </header>
    <div class="grid">
      <div class="grid-container">
        <aside v-for="project in projects" :key="project.id"
               class="card">
          <a class="card__link"
             rel="noopener"
             target="_blank"
             tabindex="0">
            <img class="card__image"
                 alt="project.name"
                 :src="'./src/img/projects/'+item.image"/>
            <h4 class="card__title">{{ project.name }}</h4>
            <p class="card__description">{{ project.description }}</p>
            <span class="card__date">{{ project.date }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      projects: [
        { name: 'NikiFilm',
          description: 'Photographer portfolio',
          image: '',
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
        { name: '',
          description: '',
          image: '',
          date: '',
          link: ''
        },
      ],
      menuOpened: false,
    }
  },
}
</script>
<style></style>
