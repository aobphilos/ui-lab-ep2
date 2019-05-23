<template>
  <!-- Stepper Container Start -->
  <section id="step_report_service">
    <div class="container">
      <div class="row margin-t20">
        <div class="columns">
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
          <div class="margin-t10">
            <input type="checkbox" name="isSelectAll" id="isSelectAll" v-model="isSelectAll">
            <label
              for="isSelectAll"
              class="padding-l10 p-type-5"
            >{{ $t('content.submitGem.stepper.stepTwo.set2.selectAll') }}</label>
          </div>
          <div class="margin-t10">
            <file-upload name="filex1"></file-upload>
          </div>
        </div>
      </div>
      <div class="row margin-t40">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepTwo.set3.subject') }}</h4>
          <div class="margin-t10">
            <div class="row report-type">
              <div class="col-sm-2 col-xs-3">
                <div class="img-report">
                  <input
                    type="radio"
                    name="reportType"
                    :value="PREMIUM_REPORT"
                    v-model="form.report.reportType"
                  >
                </div>
              </div>
              <div class="col-sm-10 col-xs-9">
                <div class="col-sm-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption1') }}</p>
                </div>
                <div class="col-sm-6">
                  <a href="#">View Sample</a>
                </div>
                <div class="col-sm-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-sm-6">
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
                <div class="col-sm-6">
                  <input
                    type="checkbox"
                    name="optPremiumSealingBox"
                    id="optPremiumSealingBox"
                    v-model="reportOptions.PREMIUM_REPORT.isIncludeSealingBox"
                  >
                  <label
                    for="optPremiumSealingBox"
                    class="padding-l10 p-type-5"
                  >{{ $t('content.submitGem.stepper.stepTwo.set3.extra2') }}</label>
                </div>
                <div class="col-sm-12">
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
              <div class="col-sm-2 col-xs-3">
                <div class="img-report">
                  <input
                    type="radio"
                    name="reportType"
                    :value="REGULAR_REPORT"
                    v-model="form.report.reportType"
                  >
                </div>
              </div>
              <div class="col-sm-10 col-xs-9">
                <div class="col-sm-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption2') }}</p>
                </div>
                <div class="col-sm-6">
                  <a href="#">View Sample</a>
                </div>
                <div class="col-sm-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-sm-6">
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
                <div class="col-sm-6">
                  <input
                    type="checkbox"
                    name="optRegularSealingBox"
                    id="optRegularSealingBox"
                    v-model="reportOptions.REGULAR_REPORT.isIncludeSealingBox"
                  >
                  <label
                    for="optRegularSealingBox"
                    class="padding-l10 p-type-5"
                  >{{ $t('content.submitGem.stepper.stepTwo.set3.extra2') }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="margin-t10">
            <div class="row report-type">
              <div class="col-sm-2 col-xs-3">
                <div class="img-report">
                  <input
                    type="radio"
                    name="reportType"
                    id="reportTypeSmall"
                    :value="SMALL_REPORT"
                    v-model="form.report.reportType"
                  >
                </div>
              </div>
              <div class="col-sm-10 col-xs-9">
                <div class="col-sm-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption3') }}</p>
                </div>
                <div class="col-sm-6">
                  <a href="#">View Sample</a>
                </div>
                <div class="col-sm-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-sm-6">
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
                <div class="col-sm-6">
                  <input
                    type="checkbox"
                    name="optSmallSealingBox"
                    id="optSmallSealingBox"
                    v-model="reportOptions.SMALL_REPORT.isIncludeSealingBox"
                  >
                  <label
                    for="optSmallSealingBox"
                    class="padding-l10 p-type-5"
                  >{{ $t('content.submitGem.stepper.stepTwo.set3.extra2') }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="margin-t10">
            <div class="row report-type">
              <div class="col-sm-2 col-xs-3">
                <div class="img-report">
                  <input
                    type="radio"
                    name="reportType"
                    :value="SEALING_CARD"
                    v-model="form.report.reportType"
                  >
                </div>
              </div>
              <div class="col-sm-10 col-xs-9">
                <div class="col-sm-6">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.caption4') }}</p>
                </div>
                <div class="col-sm-6">
                  <a href="#">View Sample</a>
                </div>
                <div class="col-sm-12">
                  <p class="p-type-5">{{ $t('content.submitGem.stepper.stepTwo.set3.detail') }}</p>
                </div>
                <div class="col-sm-12">
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
import { getModule } from "vuex-module-decorators";
import SubmitGem from "@/store/modules/submit-gem";
import { Component, Vue, Watch } from "vue-property-decorator";
import {
  MountingType,
  ReportType,
  StonePhoto,
  Report
} from "@/models/submit-gem";
import FileUpload from "@/components/FileUpload.vue";

@Component({
  components: { FileUpload }
})
export default class StepReportService extends Vue {
  public submitGem = getModule(SubmitGem);
  public isSelectAll = false;

  public reportOptions = {
    PREMIUM_REPORT: {
      isIncludeSealingCard: false,
      isIncludeSealingBox: false,
      isIncludeOriginalReport: false
    },
    REGULAR_REPORT: {
      isIncludeSealingCard: false,
      isIncludeSealingBox: false
    },
    SMALL_REPORT: {
      isIncludeSealingCard: false,
      isIncludeSealingBox: false
    }
  };

  public form = {
    mountingType: MountingType.LOOSE,
    stonePhotos: [] as StonePhoto[],
    report: new Report()
  };

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

  public setStonePhoto() {
    const photos: StonePhoto[] = [
      {
        path: "Jame Barn",
        description: "Jick Kick"
      },
      {
        path: "Abbot Sammual",
        description: "Jim Tonic"
      }
    ];
    this.form.stonePhotos = photos;
  }
  
  public created() {
    this.setStonePhoto();
    this.$root.$on("validate-step-2", this.validateForm);
  }
  public mounted() {
    this.validateForm();
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

  @Watch("isSelectAll")
  private isSelectAllChange(val: any) {
    console.log("is select all: ", val);
  }

  @Watch("form", { deep: true })
  private async validateForm() {
    await this.$validator.validate();
    if (this.form.stonePhotos && this.form.stonePhotos.length > 0) {
      this.updateReportOption();
      this.submitGem.setStep2(
        this.form.mountingType,
        this.form.stonePhotos,
        this.form.report
      );
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  }
}
</script>
<style scoped lang="less">
section {
  min-height: 250px;
  padding-left: 40px;
  .row.report-type {
    width: 93%;
  }
  .img-report {
    height: 110px;
    padding-top: 25%;
    background: url("/img/submit-gem/outline-panorama-24px.svg") no-repeat right;
    background-size: contain;
  }
}
</style>

