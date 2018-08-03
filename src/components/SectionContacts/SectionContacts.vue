<template>
  <section class="section contacts">
    <div class="grid">
      <div class="grid__row">
        <div class="col-xs-12 col-md-6 m-l-auto m-r-auto">
          <h2 class="section__title">Contact me</h2>
          <h5>to get personal consultation or mentoring </h5>
          <form>
            <div v-for="field in fields" :key="field.id">
              <template v-if="field.type=='text' || field.type=='email'">
                <baseInput
                  inputModifier="fabian"
                  :inputModel="field.inputModel"
                  :inputType="field.type"
                  :inputLabel="field.label"
                  :placeholderText="field.placeholderText"
                  :validationText="field.validationText"
                  :isValid="field.isValid"
                  >
                </baseInput>
              </template>
              <template v-if="field.type=='file'">
                <baseInputUpload
                  inputModifier="fabian"
                  inputLabel="Attach specification or design">
                </baseInputUpload>
              </template>
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
        model: {
          userName: '',
          email: '',
          message: '',
          files: '',
          // 9zY-qCa-BzC-Kd4
        },
        invalidName: false,
        invalidEmail: false,
        fields: [
          {
            inputModel: '',
            label: 'Name',
            placeholderText: 'Enter Your Name',
            type: 'text',
            validationText: 'Name must contain at least 2 simbols',
            isValid: !this.invalidName,
            // onChange: this.validateName(),
          }, {
            // inputModel: this.model.email,
            inputModel: '',
            label: 'Email',
            placeholderText: 'Enter email address',
            type: 'email',
            validationText: 'Incorrect Email address',
            isValid: !this.invalidEmail,
            // onChange: this.validateEmail(),
          }, {
            // inputModel: this.model.message,
            inputModel: '',
            label: 'Message',
            type: 'textarea',
            isValid: true,
          }, {
            // inputModel: this.model.files,
            inputModel: '',
            label: 'Attach specification or design',
            type: 'file',
            placeholderText: '',
          },
        ],
      };
    },
    methods: {
      login() {
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
        if (!this.model.userName.value) {
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
        if (regex.test(this.model.email)) {
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
  };
</script>

<style lang="sass" scoped></style>
