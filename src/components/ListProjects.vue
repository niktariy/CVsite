<template>
  <div class="grid__container grid__container--three">
    <template v-for="project in sortedProjects" >
      <c-card :item="project"
              :key="project.id">
      </c-card>
    </template>
  </div>
</template>

<script>
  import BaseCard from "./UI/BaseCard";
  import _ from 'lodash';

  export default {
    components: {
      'c-card': BaseCard
    },
    name: 'ProjectsList',
    computed: {
      allProjects() {
        return this.$store.getters.load_filtered_projects;
      },
      sortedProjects() {
        return _.orderBy(this.allProjects, ['date'], ['desc'])
      }
    }
  }
</script>
