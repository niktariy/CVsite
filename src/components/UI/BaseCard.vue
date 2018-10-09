<template>
  <aside class="card">
    <router-link
      :to="{path: '/products/'+index }"
      class="card__link"
      rel="noopener"
      target="_parent"
      tabindex="0">
      <figure class="card__img-container">
        <img class="card__img"
             :alt="item.name"
             :src="'/img/projects/'+item.image"/>
      </figure>
      <h4 class="card__title">{{ item.name }}</h4>
      <p class="card__description">{{ item.description }}</p>
      <slot name="cardTags" v-if="item.tags">
        <div class="card__tags-list">
          <span class="card__tag" v-for="tag in item.tags">{{tag}}</span>
        </div>
      </slot>
      <span class="card__date" hidden>&ndash; {{ item.date }}</span>
    </router-link>
  </aside>
</template>

<script>
  export default {
    name: 'c-card',
    props: ['item', 'index']
  }
</script>

<style lang="sass" scoped>

  @import "./src/style/base/colors"
  @import "./src/style/base/media"
  @import "./src/style/base/variables"

  .card
    cursor: pointer
    position: relative
    height: 100%
    width: 100%

    &__link
      display: flex
      align-items: center
      flex-direction: column
      justify-content: space-between
      position: relative
      padding-bottom: 12px
      height: 100%
      background-color: rgba($White, .72)
      border-radius: 3px
      opacity: 1
      will-change: background-color, box-shadow
      transition: box-shadow 0.24s $v--ease-in
      &:hover, &:focus
        box-shadow: 0 8px 24px 0 rgba($secondaryDark, 0.16)
      +xs-only
        box-shadow: 0 4px 8px 0 rgba($secondaryDark, 0.16)

    &__img-container
      margin-bottom: 16px
      width: 100%
      border-radius: 3px 3px 0 0
      overflow: hidden
      +xs-only
        max-height: 400px

    &__img
      height: auto
      width: 100%
      object-fit: cover
      object-position: top

    &__title
      margin-bottom: 8px
      text-align: center

    &__tag
      font-size: $font--14-16
      color: $text-color--regular
      &:not(:last-child)::after
        content: ', '

</style>
