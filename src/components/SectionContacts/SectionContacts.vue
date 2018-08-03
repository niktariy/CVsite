<template>
  <section class="section contacts">
    <div class="grid">
      <div class="grid__row">
        <div class="col-xs-12 col-md-6 m-l-auto m-r-auto">
          <sectionHeading
            sectionTitle="Get in touch"
            sectionDescription="to receive the personal consultation or mentoring">
          </sectionHeading>
          <form>
            <baseInput
              inputModifier="fabian"
              v-model="model.UserName"
              :inputType="fields[0].type"
              :inputLabel="fields[0].label"
              :placeholderText="fields[0].placeholderText"
              :validationText="fields[0].validationText"
              :isValid="fields[0].isValid"
              @change="validateName()"
              >
            </baseInput>
            <baseInput
              inputModifier="fabian"
              v-model="model.Email"
              :inputType="fields[1].type"
              :inputLabel="fields[1].label"
              :placeholderText="fields[1].placeholderText"
              :validationText="fields[1].validationText"
              :isValid="fields[1].isValid"
              @change="validateEmail()"
              >
            </baseInput>
            <template v-if="model.UserName">Hi, {{model.UserName}}!</template>
            <baseInputUpload
              inputModifier="fabian"
              inputLabel="Attach specification or design"
              v-model="model.FileUploader">
            </baseInputUpload>
            <div class="grid__row">
              <div class="col-xs-12 col-sm-6">
                <a
                  href="#"
                  class="link link--external"
                  data-text="Available for hiring">
                  Available for hiring
                </a>
              </div>
              <div class="component component--secondary col-xs-12 col-sm-6">
                <button class="btn" type="submit" @click="validate">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import sectionHeading from '../TheSectionHeading/TheSectionHeading';
  import baseInput from '../BaseInput/BaseInput';
  import baseInputUpload from '../BaseInput/BaseInputUpload';

  export default {
    name: 'section--contacts',
    components: {
      sectionHeading,
      baseInput,
      baseInputUpload,
    },
    data () {
      return {
        msg: 'Contact Me',
        invalidName: false,
        invalidEmail: false,
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
    watch: {
    },
  };
</script>

<style lang="sass" scoped></style>
