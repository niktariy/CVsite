<template>
  <div class="input-upload flex-column">
    <label :for="uploadId" class="input-upload__label" aria-labelledby="addFiles">
      {{ inputLabel }}
    </label>
    <div class="input-upload__wrapper flex-column">

      <div id="dropzone"
           class="input-upload__content flex"
           v-if="!isMaxFilesUploaded">
        <div class="component component--primary">
          <button type="button"
                  class="btn btn--flat input-upload__button "
                  style="position: relative;"
                  aria-label="add specs or design">
            {{uploadButtonTitle}}
            <input :id="uploadId"
                   type="file"
                   name="file"
                   multiple
                   ref="attachments"
                   @change="uploadFiles"
            />
          </button>
        </div>
        <div class="input-upload__additional">
          <p v-html="dropzoneTitle"></p>
          <p class="font__date">({{dropzoneDescr}})</p>
        </div>
      </div>

      <div class="input-upload__files js-uploadedFilesContainer"
           id="uploadedFiles"
           v-if="isFilesUploaded">
        <div class="uploaded-file input-upload__file"
             v-for="(file, index) in Attachments"
             :key="index">
          <div class="uploaded-file__preview">
            <img :src="set_attachment_icon(file.type)" />
          </div>
          <div class="uploaded-file__name"
               aria-label="File name"
               :title="file.name">
            {{ ellipsis_string(file.name) }}
          </div>
          <span class="uploaded-file__remove"
                title="remove file"
                aria-label="Delete"
                @click="removeFile(index)">x
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import _ from 'lodash';

  const MAX_FILE_SIZE = 5242880;
  const MAX_FILES_COUNT = 10;

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
        Attachments: [],
        uploadId: "attachments",
        uploadButtonTitle: "Upload files",
        dropzoneTitle: "or drag &amp; drop files here",
        dropzoneDescr: "file size less than 5MB"
      };
    },
    beforeRouterUpdate(to, from, next) {
      this.Attachments = [];
      next()
    },
    methods: {
      uploadFiles(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;

        files = [...files];

        files = _.remove(files, (file) => {
          return file.size <= MAX_FILE_SIZE && !_.find(this.Attachments, {name: file.name});
        });
        this.Attachments =  _.concat(this.Attachments, files);

        if (this.Attachments.length > MAX_FILES_COUNT) {
          this.Attachments = _.slice(this.Attachments, 0, MAX_FILES_COUNT);
        }
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

      removeFile(fileID) {
        this.Attachments = [...this.Attachments].filter(item => {
          return !(item.name === this.Attachments[fileID].name);
        });
      },
    },
    mounted() {
      let self = this;
      let dropZone = document.getElementById("dropzone");

      dropZone.addEventListener("dragenter", (e) => {
        dropZone.style.opacity = 0.8;
      });

      dropZone.addEventListener("dragleave", (e) => {
        e.preventDefault();
        dropZone.style.opacity = 1;

      });

      dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.style.opacity = 0.6;
      });

      dropZone.addEventListener("drop", (e) => {
        debugger
        e.preventDefault();
        dropZone.style.opacity = 1;

        var files = e.dataTransfer.files;
        console.log("Droped files:", files);
        self.uploadFiles(e, files);
      });
    },
    computed: {
      isFilesUploaded(){
        return !_.isEmpty(this.Attachments)
      },
      isMaxFilesUploaded(){
        return _.isEqual(this.Attachments.length, MAX_FILES_COUNT);
      }
    }
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
