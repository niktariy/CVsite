<template>
  <div class="component"
       :class="'component'+componentType">
    <template v-if="isButtonLink">
      <router-link
         class="btn"
         tag="button"
         type="button"
         :to="buttonLinkTo"
         :class="[className, 'btn'+modifier]">
        {{label}}
      </router-link>
    </template>
    <template v-else>
      <button
         class="btn"
         :type="type"
         :class="[className, 'btn'+modifier]">
        {{label}}
      </button>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      className: String,
      modifier: String,
      icon: String,
      componentType: {
        type: String,
        required: true,
        default: '--primary'
      },
      type: {
        type: String,
        default: 'button'
      },
      label: {
        type: String,
        required: true
      },
      isButtonLink: Boolean,
      buttonLinkTo: String,
    }
  }
</script>