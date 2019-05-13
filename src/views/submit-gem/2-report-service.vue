<template>
  <!-- Stepper Container Start -->
  <section id="step_report_service">
    <div class="container">
      <div class="row margin-t20">
        <div class="columns">
          <span>{{ $t('content.submitGem.stepper.stepTwo.set1.subject') }}</span>
          <div class="margin-t10">
            <input
              type="radio"
              name="mountingType"
              id="mountingType1"
              :value="LOOSE"
              v-model="form.mountingType"
            >
            <label for="mountingType1">{{ $t('content.submitGem.stepper.stepOne.set1.choice1') }}</label>
          </div>
          <div class="margin-t10">
            <input
              type="radio"
              name="mountingType"
              id="mountingType2"
              :value="MOUNTED"
              v-model="form.mountingType"
            >
            <label for="mountingType2">{{ $t('content.submitGem.stepper.stepOne.set1.choice2') }}</label>
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
import { MountingType, ReportType, StonePhoto } from '@/models/submit-gem';

@Component
export default class StepReportService extends Vue {
  public submitGem = getModule(SubmitGem);
  public get stoneCount() {
    return this.submitGem.stoneCount;
  }
  public form = {
    mountingType: MountingType.LOOSE,
    stonePhotos: [] as StonePhoto[],
    reportType: ReportType.REGULAR_REPORT,
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
        path: 'Jame Barn',
        description: 'Jick Kick',
      },
      {
        path: 'Abbot Sammual',
        description: 'Jim Tonic',
      },
    ];
    this.form.stonePhotos = photos;
  }

  public created() {
    this.setStonePhoto();
    this.$root.$on('validate-step-2', this.validateForm);
  }
  public mounted() {
    this.validateForm();
  }
  @Watch('form', { deep: true })
  private validateForm() {
    if (this.form.stonePhotos && this.form.stonePhotos.length > 0) {
      this.submitGem.setMountingType(this.form.mountingType);
      this.submitGem.setStonePhotos(this.form.stonePhotos);
      this.submitGem.setReportType(this.form.reportType);
      this.$emit('can-continue', { value: true });
    } else {
      this.$emit('can-continue', { value: false });
    }
  }
}
</script>
<style scoped lang="less">
section {
  min-height: 250px;
  padding-left: 40px;
}
</style>

