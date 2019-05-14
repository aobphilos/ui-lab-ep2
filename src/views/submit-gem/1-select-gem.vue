<template>
  <!-- Stepper Container Start -->
  <section id="step_select_gem">
    <div class="container">
      <div class="row margin-t20">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepOne.set1.subject') }}</h4>
          <div class="margin-t10">
            <input
              type="radio"
              name="stoneType"
              id="stoneType1"
              :value="DIAMOND"
              v-model="form.stoneType"
            >
            <label for="stoneType1" class="padding-l10 p-type-5">{{ $t('content.submitGem.stepper.stepOne.set1.choice1') }}</label>
          </div>
          <div class="margin-t10 ">
            <input
              type="radio"
              name="stoneType"
              id="stoneType2"
              :value="COLORED_STONE"
              v-model="form.stoneType"
            >
            <label for="stoneType2" class="padding-l10 p-type-5">{{ $t('content.submitGem.stepper.stepOne.set1.choice2') }}</label>
          </div>
          <div class="margin-t10">
            <input
              type="radio"
              name="stoneType"
              id="stoneType3"
              :value="UNKNOWN"
              v-model="form.stoneType"
            >
            <label for="stoneType3" class="padding-l10 p-type-5">{{ $t('content.submitGem.stepper.stepOne.set1.choice3') }}</label>
          </div>
        </div>
      </div>
      <div class="row margin-t40">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepOne.set2.subject') }}</h4>
          <div class="margin-t10">
            <input
              name="stoneCount"
              v-model.number="form.stoneCount"
              type="number"
              min="1"
              max="1000"
              v-validate="'required'"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Stepper Container End -->
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { StoneType } from '@/models/submit-gem';
import SubmitGem from '@/store/modules/submit-gem';

@Component
export default class StepSelectGem extends Vue {
  public submitGem = getModule(SubmitGem);

  public form = {
    stoneType: StoneType.DIAMOND,
    stoneCount: 1,
  };

  private get DIAMOND() {
    return StoneType.DIAMOND;
  }
  private get COLORED_STONE() {
    return StoneType.COLORED_STONE;
  }
  private get UNKNOWN() {
    return StoneType.UNKNOWN;
  }

  public async created() {
    await this.submitGem.reset();
    this.$root.$on('validate-step-1', this.validateForm);
  }

  public mounted() {
    this.validateForm();
  }

  @Watch('form', { deep: true })
  private async validateForm() {
    await this.$validator.validate();
    if (this.form.stoneCount && this.form.stoneCount > 0) {
      this.submitGem.setStep1(this.form.stoneType, this.form.stoneCount);
      this.$emit('can-continue', { value: true });
    } else {
      this.$emit('can-continue', { value: false });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
section {
  min-height: 250px;
  padding-left: 40px;
}
</style>