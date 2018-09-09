<template>
  <div
    class="input-upload flex-column">
      <label :for="uploadId" class="input-upload__label">
        {{ inputLabel }}
      </label>
      <div class="input-upload__wrapper flex-column">
          <div class="input-upload__content flex">
              <div class="component--primary">
                  <button type="button"
                          class="btn btn--flat input-upload__button "
                          style="position: relative;">
                      Upload files
                      <input type="file" :id="uploadId"
                             name="file" multiple
                             @change="onFileChange($event)"/>
                  </button>
              </div>
              <div class="input-upload__additional">
                  <p>or drag &amp; drop files here</p>
                  <p class="font__date">(file size less than 5MB)</p>
              </div>
          </div>
          <div class="input-upload__files js-uploadedFilesContainer">
            <template v-if="Attachments.length">
              <div class="uploaded-file input-upload__file"
                   v-for="file in Attachments"
                   :key="file.id">
                <div class="uploaded-file__preview">
                  <img
                    v-if="file.type.startsWith('image')"
                    src="/img/input/image.svg">
                  <img
                    v-else
                    src="/img/input/file.svg">
                </div>
                <div class="uploaded-file__name">{{ ellipsisString(file.name) }}</div>
                <button class="uploaded-file__remove"
                        :click="removeFile(file.id)">x</button>
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
      uploadId: "attachments",
      model: {
        attachments: '',
      },
      Attachments: [],
    };
  },
  methods: {
    onFileChange(event) {
      var fileList = event.target.files || event.dataTransfer.files;
      if (!fileList.length) return;
      for (var i = 0; i < fileList.length; i++) {
        var element = fileList[i];
        this.$set(this.Attachments, i, element);
      }
      console.log(this.Attachments, element)
    },
    ellipsisString(string) {
      if (string.length < 12+3) {
        return string;
      }
      return string.substr(0, 6) + '...' + string.substr(string.length - 6, string.length);
    },
    removeFile(fileId) {
      this.$set(this.Attachments, fileId);
    },
  },
}
</script>

<style lang="sass" scoped>
  @import "input-upload"

  input#attachments
   opacity: 0
   position: absolute
   top: 0
   left: 0
   width: 100%
   height: 100%
   cursor: pointer
</style>
