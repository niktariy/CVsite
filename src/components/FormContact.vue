<template>
  <form class="contact-form">
    <base-input
      inputModifier="fabian"
      v-model="model.UserName"
      :inputType="fields[0].type"
      :inputLabel="fields[0].label"
      :placeholderText="fields[0].placeholderText"
      :validationText="fields[0].validationText"
      :isValid="fields[0].isValid"
      @change="validateName(), addError()"
    ></base-input>
    <base-input
      inputModifier="fabian"
      v-model="model.Email"
      :inputType="fields[1].type"
      :inputLabel="fields[1].label"
      :placeholderText="fields[1].placeholderText"
      :validationText="fields[1].validationText"
      :isValid="fields[1].isValid"
      @change="validateEmail(), addError()"
    ></base-input>
    <template v-if="model.UserName">Hi, {{model.UserName}}!</template>
    <base-input-upload
      inputModifier="fabian"
      inputLabel="Attach specification or design"
      v-model="model.FileUploader">
    </base-input-upload>
    <div
      class="contact-form__actions"
      v-if="isAvailable"
    >
        <a
          href="#"
          class="link link--external"
          data-text="Available for hiring">
          Available for hiring
        </a>
      <div class="contact-form__button-send component component--secondary">
        <button class="btn btn--raised" type="submit" @click="validate">Send</button>
      </div>
    </div>
    <div v-else class="contact-form__actions contact-form__actions--separate">
      <div class="component component--secondary">
        <button class="btn btn--raised" type="submit" @click="validate">Send</button>
      </div>
    </div>
  </form>
</template>

<script>

  let inputPath = '@/components/UI/BaseInput';

  import baseInput from '@/components/UI/BaseInput/BaseInput';
  import baseInputUpload from '@/components/UI/BaseInput/BaseInputUpload';

  export default {
    name: 'contact-form',
    components: {
      baseInput,
      baseInputUpload,
    },
    data () {
      return {
        invalidName: false,
        invalidEmail: false,
        isAvailable: true,
        model: {
          UserName: '',
          Email: '',
          FileUploader: ''
        },
        fields: [
          {
            label: 'Name',
            placeholderText: 'Enter Your Name',
            type: 'text',
            validationText: 'Name must contain at least 2 simbols',
            isValid: !this.invalidName,
          }, {
            label: 'Email',
            placeholderText: 'Enter email address',
            type: 'email',
            validationText: 'Incorrect Email address',
            isValid: !this.invalidEmail,
          }, {
            label: 'Message',
            type: 'textarea',
            isValid: true,
          }, {
            label: 'Attach specification or design',
            type: 'file',
            placeholderText: '',
          },
        ],
      };
    },
    methods: {
      validate() {
        //  Validate
        this.validateName();
        this.validateEmail();
        let valid;
        if (
          this.invalidName
          || this.invalidEmail
        ) {
          valid = false;
          this.setError();
        } else { valid = true; }

        if (valid) {
          console.log(this.model);
          alert('Logging In! See console for object details.');
          this.$router.push('/main');
        } else {
          console.log('Invalid Information');
        }
      },
      validateName() {
        // Validation Checks
        if (!this.model.UserName.value) {
          this.invalidName = false;
          this.removeError(event.target);
        } else {
          this.invalidName = true;
          this.addError(event.target);
        }
      },
      validateEmail() {
        // Validation Checks
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regex.test(this.model.Email)) {
          this.invalidEmail = false;
          this.removeError(event.target);
        } else {
          this.invalidEmail = true;
          this.addError(event.target);
        }
      },
      addError(el) {
        el.classList.remove('success');
        el.classList.add('error');
        el.parentElement.classList.add('error');
      },
    },
  }
</script>

<style lang="sass" scoped>
.contact-form
  &__actions
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: 2em
    &--separate
      justify-content: center
  &__available
    margin: auto 0

</style>
