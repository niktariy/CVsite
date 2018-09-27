<template>
  <form class="contact-form" action="">
    <base-input
       v-model="model.UserName"
       aria-required="true"
       isRequired="required"
       id="user_name"
       :inputType="fields[0].type"
       :inputLabel="fields[0].label"
       :inputModifier="inputModifier"
       :placeholderText="fields[0].placeholderText"
       :validationText="fields[0].validationText"
       :isValid="fields[0].isValid"
       @change="[validateName(), addError()]"
    ></base-input>
    <base-input
       v-model="model.Email"
       aria-required="true"
       id="user_emali"
       isRequired="required"
       :inputType="fields[1].type"
       :inputLabel="fields[1].label"
       :inputModifier="inputModifier"
       :placeholderText="fields[1].placeholderText"
       :validationText="fields[1].validationText"
       :isValid="fields[1].isValid"
       @change="[validateEmail(), addError()]"
    ></base-input>
    <base-input-upload
       :inputModifier="inputModifier"
       :inputLabel="fields[3].label"
       v-model="model.FileUploader">
    </base-input-upload>
    <div
      class="contact-form__actions"
      v-if="isAvailable"
    >
      <router-link to="/contacts"
                   class="link link--external"
                   data-text="Available for hiring">
        Available for hiring
      </router-link>
      <div class="contact-form__button-send component component--secondary">
        <button class="btn btn--raised" type="submit" @click="validate">Send</button>
      </div>
    </div>
    <div class="contact-form__actions contact-form__actions--separate" v-else>
      <base-button
         :type="button.type"
         :componentType="button.componentType"
         :modifier="button.modifier"
         :label="button.label"
      ></base-button>
    </div>

  </form>
</template>

<script>

  import BaseInput from '@/components/UI/BaseInput/BaseInput';
  import BaseInputUpload from '@/components/UI/BaseInput/BaseInputUpload';
  import BaseButton from "../BaseButton";

  export default {
    name: 'contact-form',
    components: {
      BaseButton,
      BaseInput,
      BaseInputUpload,
    },
    data() {
      return {
        invalidName: false,
        invalidEmail: false,
        isAvailable: false,
        inputModifier: 'fabian',
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
          },
        ],
        button: {
          componentType: '--secondary',
          modifier: '--raised',
          label: 'Send',
          type: 'submit'
        }
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
      validateName(event) {
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
