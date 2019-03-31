<template>
  <div>
    <loader-fade-out/>
    <!-- Verify heading-->
    <section id="verify_header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h4 class="h4-type3">{{ $t('menu.verifyReport') }}</h4>
            <div class="border-bar4 margin-t20"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Verify heading end-->
    <!-- what we do  -->
    <section id="verify" class="padding-tb50">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-5 col-xs-12">
            <div class="padding-tb25">
              <form action="#/verify">
                <div class="form-group">
                  <label for="verifyId">{{ $t('content.verifyReport.section.verify.subject')}}</label>
                  <br>
                  <br>
                  <input
                    type="text"
                    class="input_text"
                    name="verifyId"
                    :placeholder="$t('content.verifyReport.section.verify.input')"
                    v-model="reportId"
                    v-bind:disabled="isLoading"
                  >
                </div>
                <button
                  name="submit"
                  class="input_submit"
                  @click.prevent="getReport"
                  v-bind:disabled="isLoading"
                >
                  {{ $t('content.verifyReport.section.verify.button')}}
                  <i
                    class="glyphicon glyphicon-refresh"
                    v-bind:class="{loader: isLoading}"
                  ></i>
                </button>
                <p class="p-type-3 color-grey margin-t20">
                  <span v-show="isPass">
                    <a :href="currentUrl" target="_blank">Open File | เปิดไฟล์ | 点击这</a>
                  </span>
                  <span
                    class="error"
                    v-show="hasError"
                  >{{ $t('content.verifyReport.section.verify.error.subject')}}</span>
                  <br>
                  <span
                    class="error"
                    v-show="hasError"
                  >{{ $t('content.verifyReport.section.verify.error.detail')}}</span>
                </p>
              </form>
            </div>
          </div>
          <div class="col-md-8 col-sm-7 col-xs-12 text-center">
            <div class="row wrapper-image">
              <h4 class="h4-type1">{{ $t('content.verifyReport.section.sample.subject')}}</h4>
            </div>
            <div class="row wrapper-image">
              <a
                href="/img/verify/full/verify1.jpg"
                data-lightbox="sample-lightbox"
                data-alt="Sample Verify Image"
              >
                <img src="/img/verify/verify1.jpg" alt="Sample Verify Image">
              </a>
            </div>
            <div class="row wrapper-image">
              <a
                href="/img/verify/full/verify2.jpg"
                data-lightbox="sample-lightbox"
                data-alt="Sample Verify Image"
              >
                <img src="/img/verify/verify2.jpg" alt="Sample Verify Image">
              </a>
            </div>
            <div class="row wrapper-image">
              <a
                href="/img/verify/full/verify3.jpg"
                data-lightbox="sample-lightbox"
                data-alt="Sample Verify Image"
              >
                <img src="/img/verify/verify3.jpg" alt="Sample Verify Image">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- what we do  end-->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoaderFadeOut from '@/components/LoaderFadeOut.vue';

@Component({
  components: {
    LoaderFadeOut,
  },
})
export default class PageVerifyReport extends Vue {
  private reportId: string = '';
  private isLoading: boolean = false;
  private hasError: boolean = false;
  private currentUrl: string = '';
  private isPass: boolean = false;

  public async getReport() {
    const vm = this;

    if (vm.reportId.trim() === '') {
      return;
    }

    vm.hasError = false;
    vm.isLoading = true;
    vm.isPass = false;
    vm.currentUrl = '';

    const reportName = `${vm.reportId}.pdf`;
    const localUrl = `/certificates/${vm.reportId}.pdf`;
    const localSubFolderUrl = `/certificates/${vm.reportId.substr(0, 4)}/${
      vm.reportId
    }.pdf`;
    const apiUrl = `http://dreamxchange-001-site3.btempurl.com/api/certificates/DownloadAndOpen?id=${
      vm.reportId
    }`;

    // =================== [Get Local Report Main] ========================
    try {
      const xhrBlob = await vm.getReportLocal(localUrl);
      if (vm.checkValidReport(xhrBlob)) {
        vm.renderDocument(localUrl);
        return;
      }
    } catch {
      // continue to find out the report document.
    }

    // =================== [Get Local Report Sub] ========================
    try {
      const xhrBlob = await vm.getReportLocal(localSubFolderUrl);
      if (vm.checkValidReport(xhrBlob)) {
        vm.renderDocument(localSubFolderUrl);
        return;
      }
    } catch {
      // continue to find out the report document.
    }

    // =================== [Get Server Report] ========================
    try {
      await vm.getReportServer(apiUrl);
      vm.renderDocument(apiUrl);
      return;
    } catch {
      vm.isLoading = false;
      vm.reportId = '';
      vm.hasError = true;
    }
  }

  public mounted() {
    $('.parallax-mirror').hide();
  }

  private renderDocument(url: string) {
    this.isPass = true;
    this.currentUrl = url;
    this.isLoading = false;
    this.reportId = '';
  }

  private getReportServer(url: string) {
    // id: 1803SNV0075
    return $.ajax({
      method: 'GET',
      url,
      crossDomain: true,
      xhrFields: {
        responseType: 'blob',
        withCredentials: true,
      },
    });
  }

  private getReportLocal(url: string) {
    // id: 1803CDR9999
    // id: 1206_CDS0001 -> outter
    // id: 1206_CDR0001 -> inner
    return $.ajax({
      method: 'GET',
      url,
      xhrFields: {
        responseType: 'blob',
        withCredentials: true,
      },
    });
  }

  private checkValidReport(response: any) {
    const reg = /^application\/pdf/;
    return reg.test(response.type);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #verify_header {
    height: 265px;
    background-image: url("/img/cover/default.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .input_submit[disabled] {
    filter: grayscale(1);
  }
  .loader {
    border-radius: 50%;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  .error {
    font-style: italic;
    color: red;
    font-weight: 400;
    font-size: 15px;
  }
  .wrapper-image {
    padding: 25px 15px;
  }
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 768px) {
    #verify_header {
      height: 230px;
    }
  }
</style>
