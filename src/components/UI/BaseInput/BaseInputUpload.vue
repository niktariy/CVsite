<template>
  <div class="input-upload flex-column">
    <label :for="uploadId" class="input-upload__label" aria-labelledby="addFiles">
      {{ inputLabel }}
    </label>
    <div class="input-upload__wrapper flex-column">

      <div class="input-upload__content flex">

        <div class="component--primary">
          <button type="button"
                  class="btn btn--flat input-upload__button "
                  style="position: relative;"
                  aria-label="add specs or design">
            Upload files
            <input type="file" :id="uploadId" id="attachments"
                   name="file" multiple
                   ref="attachments"
                   @change="onFileChange"/>
          </button>
        </div>
        <div class="input-upload__additional">
          <p>or drag &amp; drop files here</p>
          <p class="font__date">(file size less than 5MB)</p>
        </div>
      </div>

      <div class="input-upload__files js-uploadedFilesContainer"
           id="uploadedFiles"
           v-if="Attachments.length">
        <div class="uploaded-file input-upload__file"
             v-for="file in Attachments"
             :key="file.id"
             :title="file.name">
          <div class="uploaded-file__preview">
            <img :src="set_attachment_icon(file.type)" />
          </div>
          <div class="uploaded-file__name"
               aria-label="File name">
            {{ ellipsis_string(file.name) }}
          </div>
          <span class="uploaded-file__remove"
                title="remove file"
                aria-label="Delete"
                :click="remove_file(file.id)">x
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import _ from 'lodash';

  const MAX_FILE_SIZE = 5242880;

  export default {
    name: 'input-upload',
    props: {
      inputLabel: {
        type: String,
        required: true
      },
      inputModifier: {
        type: String,
        required: false
      },
      inputValue: {
        type: String,
        required: false
      },
    },
    data() {
      return {
        uploadId: "attachments",
        Attachments: [],
      };
    },
    beforeRouterUpdate(to, from, next) {
      this.Attachments = [];
      next()
    },
    methods: {
      onFileChange(event) {
        let files = event.target.files || event.dataTransfer.files;

        if (!files.length) return;
        files = [...files];
        files = _.remove(files, file => {
          return file.size <= MAX_FILE_SIZE && !_.find(this.Attachments, {name: file.name});
        });

        this.Attachments = _.concat(this.Attachments, files);
      },

      ellipsis_string(string) {
        if (string.length < 12 + 3) {
          return string;
        }
        return string.substr(0, 6) + '...' + string.substr(string.length - 6, string.length);
      },

      set_attachment_icon(fileType) {
        let image_url;
        if (fileType.startsWith('image')) {
          return image_url = '/img/input/image.svg';
        }
        return image_url = '/img/input/file.svg';
      },

      remove_file(fileID) {
        this.Attachments = [...this.Attachments].filter(item => {
          return !(item.name === this.Attachments[fileID].name);
        });
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
