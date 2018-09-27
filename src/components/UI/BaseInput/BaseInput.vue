<template>
  <div
     class="c-input"
     :class="'c-input--' + inputModifier">
    <input
       id="id"
       class="c-input__field"
       v-model="content"
       :class="'c-input--' + inputModifier + '__field'"
       :type="inputType"
       :placeholder="placeholderText"
       :required="isRequired"
       @input="handleInput"
       @keyup="setFilledClass()"
       @focus="setFocusClass()"
       @blur="removeFocusClass()"
    />
    <label
       for="id"
       class="c-input__label"
       :class="'c-input--' + inputModifier + '__label'">
      <span class="c-input__label_content">{{ inputLabel }}</span>
    </label>
    <span class="msg-validation"
          v-show="!isValid">
      {{ validationText }}
    </span>
  </div>

</template>

<script>
  export default {
    name: 'c-input',
    props: {
      inputLabel: {
        type: String,
        required: true
      },
      placeholderText: {
        type: String,
        required: true
      },
      isRequired: {
        type: String,
        required: false
      },
      inputModifier: {
        type: String,
        required: false
      },
      inputType: {
        type: String,
        required: true,
        default: 'text',
      },
      id: String,
      value: String,
      validationText: String,
      isValid: Boolean,
      onChange: Function,
    },
    data() {
      return {
        content: this.value,
      }
    },
    methods: {
      handleInput (e) {
        this.$emit('input', this.content)
      },
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
