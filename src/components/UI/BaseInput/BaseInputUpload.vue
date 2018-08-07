<template>
  <div
    class="c-input input-upload flex-column"
    :class="'c-input--' + inputModifier">
      <label for="files" class="c-input__label">
        {{ inputLabel }}
      </label>
      <div class="input-upload__wrapper flex-column">
          <div class="input-upload__content flex">
              <div class="input-upload__button component--primary">
                  <button type="button"
                          class="btn btn--plain"
                          style="position: relative;">
                      Upload files
                      <input type="file" id="files"
                             name="file" multiple
                             @change="onFileChange($event)">
                  </button>
              </div>
              <div class="input-upload__additional">
                  <p>or drag &amp; drop files here</p>
                  <p class="font__date">(file size less than 5MB)</p>
              </div>
          </div>
          <div class="input-upload__files js-uploadedFilesContainer">
            <template v-if="Files.length">
              <div
                class="input-upload__file uploaded-file">
                <div class="uploaded-file__preview">
                  <!-- <img
                    v-if="fileType.startsWith('image')"
                    src="/img/input/image.svg">
                  <img
                    v-else
                    src="/img/input/file.svg"> -->
                </div>
                <div class="uploaded-file__name"> ellipsisString(fileName) </div>
                <span class="uploaded-file__remove" :click="removeFile()"></span>
              </div>
            </template>
          </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'input-upload',
  props: {
    inputModifier: String,
    inputValue: String,
    inputLabel: String,
  },
  data() {
    return {
      model: {
        files: '',
      },
      Files: [],
    };
  },
  methods: {
    onFileChange(event) {
      console.log(event)
      debugger;
      var fileList = event.target.files || event.dataTransfer.files;
      if (!fileList.length) return;
      for (var i = 0; i < fileList.length; i++) {
        var element = fileList[i];
        debugger;

        this.$set(this, 'Files[' + i + ']', element);
      }
      console.log(this.Files, element)
      // this.createFile(files[0]);
    },
    createFile(file) {},
    ellipsisString(string) {
      if (string.length < 6) {
        return
      }

      return string.substr(0, 6) + '...' + string.substr(string.length - 5, string.length);
    },
    removeFile() {},
  },
}
</script>

<style lang="sass" scoped>
  @import "type/upload"

  .msg-validation
    position: absolute

  input#files
   opacity: 0
   position: absolute
   top: 0
   left: 0
   width: 100%
   height: 100%
   cursor: pointer
</style>
