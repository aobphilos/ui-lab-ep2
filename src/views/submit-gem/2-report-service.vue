<template>
  <!-- Stepper Container Start -->
  <section id="step_report_service">
    <div class="container">
      <div class="row margin-t20">
        <div class="col-sm-12">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepTwo.set1.subject') }}</h4>
          <div class="margin-t10">
            <input
              type="radio"
              name="mountingType"
              id="mountingType1"
              :value="LOOSE"
              v-model="form.mountingType"
            >
            <label
              for="mountingType1"
              class="padding-l10 p-type-5"
            >{{ $t('content.submitGem.stepper.stepTwo.set1.choice1') }}</label>
          </div>
          <div class="margin-t10">
            <input
              type="radio"
              name="mountingType"
              id="mountingType2"
              :value="MOUNTED"
              v-model="form.mountingType"
            >
            <label
              for="mountingType2"
              class="padding-l10 p-type-5"
            >{{ $t('content.submitGem.stepper.stepTwo.set1.choice2') }}</label>
          </div>
        </div>
      </div>
      <div class="row margin-t40">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepTwo.set2.subject') }}</h4>
          <div v-for="(photo, idx) in form.stonePhotos" :key="idx" class="row margin-t10">
            <file-upload
              :class="{'col-md-4':true, 'col-xs-5': true}"
              :name="'photo-'+(idx+1)"
              :root-path="submitGem.refId"
              v-model="photo.path"
            ></file-upload>
            <div class="col-md-8 col-xs-7">
              <textarea
                :class="{'text-desc':true, 'has-error':!isValidPhoto}"
                :name="'photo-desc-'+(idx+1)"
                :id="'photo-desc-'+(idx+1)"
                v-model="photo.description"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="row margin-t40">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepTwo.set3.subject') }}</h4>
          <div class="margin-t10">
            <div class="row report-type">
              <div class="col-xs-3">
                <div class="img-report" @click="form.report.reportType = PREMIUM_REPORT">
                  <input
                    type="radio"
                    name="reportType"
                    :value="PREMIUM_REPORT"
                    v-model="form.report.reportType"
                  >
                  <a
                    ref="premium-report"
                    href="/img/submit-gem/full/premium-report.jpg"
                    data-lightbox="service-lightbox"
                  >
                    <img src="/img/submit-gem/full/premium-report.jpg" alt="Premium Report">
                  </a>
                </div>
              </div>
              <div class="col-xs-9">
                <div class="col-xs-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption1') }}</p>
                </div>
                <div class="col-xs-6">
                  <a class="link" @click.prevent="viewImage('premium-report')">View Sample</a>
                </div>
                <div class="col-xs-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-xs-6">
                  <input
                    type="checkbox"
                    name="optPremiumSealingCard"
                    id="optPremiumSealingCard"
                    v-model="reportOptions.PREMIUM_REPORT.isIncludeSealingCard"
                  >
                  <label
                    for="optPremiumSealingCard"
                    class="padding-l10 p-type-5"
                  >{{ $t('content.submitGem.stepper.stepTwo.set3.extra1') }}</label>
                </div>
                <div class="col-xs-6"></div>
                <div class="col-xs-12">
                  <input
                    type="checkbox"
                    name="optPremiumOriginal"
                    id="optPremiumOriginal"
                    v-model="reportOptions.PREMIUM_REPORT.isIncludeOriginalReport"
                  >
                  <label
                    for="optPremiumOriginal"
                    class="padding-l10 p-type-5"
                  >{{ $t('content.submitGem.stepper.stepTwo.set3.extra3') }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="margin-t10">
            <div class="row report-type">
              <div class="col-xs-3">
                <div class="img-report" @click="form.report.reportType = REGULAR_REPORT">
                  <input
                    type="radio"
                    name="reportType"
                    :value="REGULAR_REPORT"
                    v-model="form.report.reportType"
                  >
                  <a
                    ref="regular-report"
                    href="/img/submit-gem/full/regular-report.jpg"
                    data-lightbox="service-lightbox"
                  >
                    <img src="/img/submit-gem/full/regular-report.jpg" alt="Regular Report">
                  </a>
                </div>
              </div>
              <div class="col-xs-9">
                <div class="col-xs-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption2') }}</p>
                </div>
                <div class="col-xs-6">
                  <a class="link" @click.prevent="viewImage('regular-report')">View Sample</a>
                </div>
                <div class="col-xs-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-xs-6">
                  <input
                    type="checkbox"
                    name="optRegularSealingCard"
                    id="optRegularSealingCard"
                    v-model="reportOptions.REGULAR_REPORT.isIncludeSealingCard"
                  >
                  <label
                    for="optRegularSealingCard"
                    class="padding-l10 p-type-5"
                  >{{ $t('content.submitGem.stepper.stepTwo.set3.extra1') }}</label>
                </div>
                <div class="col-xs-6"></div>
              </div>
            </div>
          </div>
          <div class="margin-t10">
            <div class="row report-type">
              <div class="col-xs-3">
                <div class="img-report" @click="form.report.reportType = SMALL_REPORT">
                  <input
                    type="radio"
                    name="reportType"
                    id="reportTypeSmall"
                    :value="SMALL_REPORT"
                    v-model="form.report.reportType"
                  >
                  <a
                    ref="small-report"
                    href="/img/submit-gem/full/small-report.jpg"
                    data-lightbox="service-lightbox"
                  >
                    <img src="/img/submit-gem/full/small-report.jpg" alt="Small Report">
                  </a>
                </div>
              </div>
              <div class="col-xs-9">
                <div class="col-xs-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption3') }}</p>
                </div>
                <div class="col-xs-6">
                  <a class="link" @click.prevent="viewImage('small-report')">View Sample</a>
                </div>
                <div class="col-xs-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-xs-6">
                  <input
                    type="checkbox"
                    name="optSmallSealingCard"
                    id="optSmallSealingCard"
                    v-model="reportOptions.SMALL_REPORT.isIncludeSealingCard"
                  >
                  <label
                    for="optSmallSealingCard"
                    class="padding-l10 p-type-5"
                  >{{ $t('content.submitGem.stepper.stepTwo.set3.extra1') }}</label>
                </div>
                <div class="col-xs-6"></div>
              </div>
            </div>
          </div>
          <div class="margin-t10">
            <div class="row report-type">
              <div class="col-xs-3">
                <div class="img-report" @click="form.report.reportType = SEALING_CARD">
                  <input
                    type="radio"
                    name="reportType"
                    :value="SEALING_CARD"
                    v-model="form.report.reportType"
                  >
                  <a
                    ref="sealing-card"
                    href="/img/submit-gem/full/sealing-card.jpg"
                    data-lightbox="service-lightbox"
                  >
                    <img src="/img/submit-gem/full/sealing-card.jpg" alt="Sealing Card">
                  </a>
                </div>
              </div>
              <div class="col-xs-9">
                <div class="col-xs-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption4') }}</p>
                </div>
                <div class="col-xs-6">
                  <a class="link" @click.prevent="viewImage('sealing-card')">View Sample</a>
                </div>
                <div class="col-xs-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-xs-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.noPicture') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Stepper Container End -->
</template>
<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import SubmitGem from '@/store/modules/submit-gem';
import { Component, Vue, Watch } from 'vue-property-decorator';
import {
  MountingType,
  ReportType,
  StonePhoto,
  Report,
  SubmitGemModel,
} from '@/models/submit-gem';
import FileUpload from '@/components/FileUpload.vue';

@Component({
  components: { FileUpload },
})
export default class StepReportService extends Vue {
  public submitGem = getModule(SubmitGem);

  private get LOOSE() {
    return MountingType.LOOSE;
  }
  private get MOUNTED() {
    return MountingType.MOUNTED;
  }
  private get PREMIUM_REPORT() {
    return ReportType.PREMIUM_REPORT;
  }
  private get REGULAR_REPORT() {
    return ReportType.REGULAR_REPORT;
  }
  private get SMALL_REPORT() {
    return ReportType.SMALL_REPORT;
  }
  private get SEALING_CARD() {
    return ReportType.SEALING_CARD;
  }
  private get SEALING_BOX() {
    return ReportType.SEALING_BOX;
  }

  public reportOptions = {
    PREMIUM_REPORT: {
      isIncludeSealingCard: false,
      isIncludeSealingBox: false,
      isIncludeOriginalReport: false,
    },
    REGULAR_REPORT: {
      isIncludeSealingCard: false,
      isIncludeSealingBox: false,
    },
    SMALL_REPORT: {
      isIncludeSealingCard: false,
      isIncludeSealingBox: false,
    },
  };

  public form = {
    mountingType: MountingType.LOOSE,
    stonePhotos: [] as StonePhoto[],
    report: new Report(),
  };

  private isValidPhoto = false;

  public async created() {
    this.$root.$on('validate-step-2', await this.validateForm);
    this.$root.$on('commit-step-2', await this.commitStep);
    this.$root.$on('refresh-photos', this.refreshStonePhotos);
  }

  public async mounted() {
    this.refreshStonePhotos();
    await this.validateForm(true);
  }

  private async commitStep(next: any) {
    if (await this.$validator.validate()) {
      this.updateReportOption();
      this.submitGem.setStep2({
        mountingType: this.form.mountingType,
        stonePhotos: this.form.stonePhotos,
        report: this.form.report,
      });
      await this.$nextTick();
      next();
    }
  }

  private updateReportOption() {
    let isIncludeSealingCard = false;
    let isIncludeSealingBox = false;
    let isIncludeOriginalReport = false;

    switch (this.form.report.reportType) {
      case ReportType.PREMIUM_REPORT:
        isIncludeSealingCard = this.reportOptions.PREMIUM_REPORT
          .isIncludeSealingCard;
        isIncludeSealingBox = this.reportOptions.PREMIUM_REPORT
          .isIncludeSealingBox;
        isIncludeOriginalReport = this.reportOptions.PREMIUM_REPORT
          .isIncludeOriginalReport;
        break;
      case ReportType.REGULAR_REPORT:
        isIncludeSealingCard = this.reportOptions.REGULAR_REPORT
          .isIncludeSealingCard;
        isIncludeSealingBox = this.reportOptions.REGULAR_REPORT
          .isIncludeSealingBox;
        break;
      case ReportType.SMALL_REPORT:
        isIncludeSealingCard = this.reportOptions.SMALL_REPORT
          .isIncludeSealingCard;
        isIncludeSealingBox = this.reportOptions.SMALL_REPORT
          .isIncludeSealingBox;
        break;
    }

    this.form.report.isIncludeSealingCard = isIncludeSealingCard;
    this.form.report.isIncludeSealingBox = isIncludeSealingBox;
    this.form.report.isIncludeOriginalReport = isIncludeOriginalReport;
  }

  private refreshStonePhotos() {
    this.form.stonePhotos = [...this.submitGem.stonePhotos];
  }

  private viewImage(imageName: string) {
    if (this.$refs[imageName]) {
      (this.$refs[imageName] as HTMLElement).click();
    }
  }

  @Watch('form', { deep: true })
  private async validateForm(isByPass = false) {
    const isValidForm = await this.$validator.validate();
    this.isValidPhoto = this.form.stonePhotos.every((item) => {
      if (
        item.path &&
        item.path !== '' &&
        (item.description && item.description !== '')
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (isValidForm && this.isValidPhoto) {
      this.$emit('can-continue', { value: true });
    } else {
      this.$emit('can-continue', { value: false });
    }
  }
}
</script>
<style scoped lang="less">
section {
  .container {
    width: 95%;
  }
  min-height: 250px;
  padding-left: 40px;
  .row.report-type {
    width: 98%;
    a.link {
      cursor: pointer;
    }
  }
  .img-report {
    height: 110px;
    padding-top: 22%;
    a {
      position: absolute;
      top: 6%;
      padding: 0 12%;
      img {
        width: 128px;
      }
    }
  }
  .text-desc {
    width: 100%;
    max-height: 90px;
    min-height: 90px;
  }
  .has-error {
    border: 1px solid red;
  }
  @media (max-width: 768px) {
    .img-report {
      height: 100px;
      padding-top: 30%;
      img {
        width: 100px;
      }
    }
  }
}
</style>

