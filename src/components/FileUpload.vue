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
      v-on:init="handleFilePondInit"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import customFilePond from "./FilePond.vue";
import * as firebase from "firebase/app";
import "firebase/storage";
import uuid from "uuid/v4";

@Component({
  components: {
    customFilePond
  }
})
export default class FileUpload extends Vue {
  // private pickFiles = [
  //   {
  //     source: "img/contact/contact.jpg",
  //     options: {
  //       type: "local"
  //     }
  //   }
  // ];
  private static MAX_FILE_SIZE = 2048 * 1000;
  private pickFiles = [];
  private get hookServer() {
    return {
      process: (
        fieldName: string,
        file: any,
        metadata: any,
        load: any,
        forceLoad: any,
        err: any
      ) => {
        // simulates uploading a file
        console.log(file, this.pond);
        const img = firebase
          .storage()
          .ref(`submit-gem/${this.uuid}/${file.name}`);
        const fullPath = img.put(file).then(snap => {
          console.log("snap: ", snap);
          load();
        });   
      },
      load: (source: any, load: any) => {
        fetch(source)
          .then(res => res.blob())
          .then(load);
      },
      revert: (sid: any, doRemove: any, forceRemove: any) => {
        doRemove();
      }
    };
  }

  private get uuid() {
    return uuid();
  }

  @Prop()
  private name: string;

  private get pond(): any {
    return this.$refs.pond;
  }

  public handleFilePondInit() {
    // const img = firebase.storage().ref("submit-gem/cpu-z-20190502.PNG");
    // const fullPath = img.fullPath;
    // img.getDownloadURL().then(e => console.log("download: ", e));
    // console.log("path: ", fullPath);
  }
}
</script>
<style lang="less">
.upload-box {
  max-width: 238px;
  max-height: 150px;
  min-height: 150px;
  .filepond--drop-label {
    max-height: 40px;
    min-height: 40px;
  }
}
</style>
