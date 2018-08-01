<template>
  <section class="section contacts">
    <div class="grid">
      <div class="grid__row">
        <div class="col-xs-12 col-sm-6 m-l-auto m-r-auto">
          <h2 class="section__title">Contact me</h2>
          <h5>to get personal consultation or mentoring </h5>
          <form>
            <div v-for="field in fields" :key="field.id">
              <template v-if="field.type=='text' || field.type=='email'">
                <baseInput
                  inputModifier="fabian"
                  :inputType="field.type"
                  :inputLabel="field.label"
                  :placeholderText="field.placeholderText"
                  :validationText="field.validationText"
                  :isValid="field.isValid">
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
        msg: 'Log In',
        model: {
          Name: '',
          Email: '',
          Message: '',
          Files: '',
          // 9zY-qCa-BzC-Kd4
        },
        active: this.registrationActive,
        invalidEmail: false,
        invalidPassword: false,
        classlist: [
          'reg__content',
          'login-form',
        ],
        fields: [
          {
            label: 'Name',
            placeholderText: 'Enter Your Name',
            type: 'text',
            validationText: 'Name must contain at least 2 simbols',
            isValid: true,
          }, {
            label: 'Email',
            placeholderText: 'Enter email address',
            type: 'email',
            validationText: 'Incorrect Email address',
            isValid: true,
          }, {
            label: 'Message',
            type: 'textarea',
            isValid: true,
          }, {
            label: 'Attach specification or design',
            type: 'file',
            placeholderText: '',
          }
        ],
      }
    }
  }
</script>

<style lang="sass" scoped></style>
