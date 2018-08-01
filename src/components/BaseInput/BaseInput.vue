<template>
  <div
    class="c-input"
    :class="'c-input--' + inputModifier">
    <input
      class="c-input__field"
      :class="'c-input--' + inputModifier + '__field'"
      :type="inputType"
      :value="inputValue"
      :placeholder="placeholderText"
      @keyup="setFilledClass()"
      @focus="setFocusClass()"
      @blur="removeFocusClass()"
    >
    <label
      class="c-input__label"
      :class="'c-input--' + inputModifier + '__label'">
      <span class="c-input__label-text">{{ inputLabel }}</span>
    </label>
    <span class="msg-validation"
          :class="{ visible: !isValid }">
          {{ validationText }}
    </span>
  </div>

</template>

<script>
export default {
  name: 'baseInput',
  props: {
    inputModifier: String,
    inputType: String,
    inputValue: String,
    inputLabel: String,
    placeholderText: String,
    validationText: String,
    onChange: Function,
    isValid: Boolean,
  },
  data() {
    return {

    }
  },
  methods: {
    setFilledClass() {
      const that = event.target;
      const parent = that.parentElement;
      if (
        !that.value.length
        && parent.classList.contains('filled')
      ) {
        parent.classList.remove('filled');
      } else if (that.value.length > 0) {
        parent.classList.add('filled');
      }
    },
    addError(el) {
      el.classList.remove('success');
      el.classList.add('error');
      el.parentElement.classList.add('error');
    },
    removeError(el) {
      el.classList.add('success');
      el.classList.remove('error');
      el.parentElement.classList.remove('error');
    },
    setError() {
      const inputCol = document.getElementsByTagName('input');
      this.invalidEmail ? this.addError(inputCol[0]) : this.removeError(inputCol[0]);
      this.invalidPassword ? this.addError(inputCol[1]) : this.removeError(inputCol[1]);
    },
    setFocusClass() {
      event.target.parentNode.classList.add('focused');
    },
    removeFocusClass() {
      event.target.parentNode.classList.remove('focused');
    },

  },
}
</script>
<style lang="sass" scoped>
  @import "c-input"
</style>
