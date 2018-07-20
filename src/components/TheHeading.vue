<template>
  <header class="section__header animate-box in-up">
    <h2 class="section__title title" :class="sectionLink">{{sectionTitle}}</h2>
    <p class="section__description" v-if="sectionDescription">{{sectionDescription}}</p>
    <hr>
  </header>
</template>