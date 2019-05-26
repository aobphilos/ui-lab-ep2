<template>
  <div class="upload-box">
    <file-pond
      :name="name"
      ref="pond"
      label-idle="Drop image here..."
      allow-multiple="false"
      max-files="1"
      max-file-size="2MB"
      accepted-file-types="image/jpeg, image/png"
      v-bind:server="hookServer"
      v-bind:files="pickFiles"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Model } from 'vue-property-decorator';
import customFilePond from './FilePond.vue';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  components: {
    customFilePond,
  },
})
export default class FileUpload extends Vue {
  private static MAX_FILE_SIZE = 2048 * 1000;
  private pickFiles = [];
  private currentFilePath = '';

  private get hookServer() {
    return {
      process: (
        fieldName: string,
        file: any,
        metadata: any,
        load: any,
        forceLoad: any,
        err: any,
      ) => {
        // simulates uploading a file
        firebase
          .storage()
          .ref(`submit-gem/${this.rootPath}/${file.name}`)
          .put(file)
          .then((snap) => {
            this.currentFilePath = snap.metadata.fullPath;
            this.$emit('change', this.currentFilePath);
            load();
          });
      },
      load: (source: any, load: any) => {
        fetch(source)
          .then((res) => res.blob())
          .then(load);
      },
      revert: (sid: any, doRemove: any, forceRemove: any) => {
        if (!this.currentFilePath) {
          forceRemove();
          return;
        }
        firebase
          .storage()
          .ref(this.currentFilePath)
          .delete()
          .then((snap) => {
            this.currentFilePath = '';
            this.$emit('change', '');
            doRemove();
          })
          .catch((err) => forceRemove(err));
      },
    };
  }

  @Prop()
  private rootPath: string;

  @Prop()
  private name: string;

  @Model('change')
  private path: string;

  private get pond(): any {
    return this.$refs.pond;
  }

}
</script>
<style lang="less">
.upload-box {
  max-width: 256px;
  max-height: 150px;
  min-height: 150px;
  .filepond--list-scroller {
    margin: 0;
    &[data-state="overflow"] {
      overflow: hidden;
      .filepond--list {
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }
    }
  }

  .filepond--file-wrapper,
  .filepond--root,
  .filepond--item,
  .filepond--image-preview,
  .filepond--image-preview-overlay,
  .filepond--panel,
  .filepond--panel-center {
    max-height: 150px;
  }
}
</style>
