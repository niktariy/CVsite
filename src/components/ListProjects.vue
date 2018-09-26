<template>
  <div class="grid__container grid__container--three">
    <template v-if="isProjectsExist">
      <template v-for="project in projects" >
        <c-card :item="project"
                :key="project.id">
        </c-card>
      </template>
    </template>
    <template v-else>
      <h5>Projects not found. Try another parameters :)</h5>
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
    props: ['projects'],
    name: 'ProjectsList',
    computed: {
      isProjectsExist() {
        return !_.isEmpty(this.projects);
      }
    }
  }
</script>
