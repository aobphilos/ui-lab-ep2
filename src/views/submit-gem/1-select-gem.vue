<template>
  <!-- Stepper Container Start -->
  <section id="step_select_gem">
    <div class="container">
      <div class="row margin-t20">
        <div style="columns">
          <span>{{ $t('content.submitGem.stepper.stepOne.set1.subject') }}</span>
          <div class="margin-t10">
            <input
              type="radio"
              name="stoneType"
              id="stoneType1"
              :value="DIAMOND"
              v-model="form.stoneType"
            >
            <label for="stoneType1">{{ $t('content.submitGem.stepper.stepOne.set1.choice1') }}</label>
          </div>
          <div class="margin-t10">
            <input
              type="radio"
              name="stoneType"
              id="stoneType2"
              :value="COLORED_STONE"
              v-model="form.stoneType"
            >
            <label for="stoneType2">{{ $t('content.submitGem.stepper.stepOne.set1.choice2') }}</label>
          </div>
          <div class="margin-t10">
            <input
              type="radio"
              name="stoneType"
              id="stoneType3"
              :value="UNKNOWN"
              v-model="form.stoneType"
            >
            <label for="stoneType3">{{ $t('content.submitGem.stepper.stepOne.set1.choice3') }}</label>
          </div>
        </div>
      </div>
      <div class="row margin-t30">
        <div class="columns">
          <span>{{ $t('content.submitGem.stepper.stepOne.set2.subject') }}</span>
          <div class="margin-t10">
            <input v-model.number="form.stoneCount" type="number" min="1" required>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Stepper Container End -->
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Watch,
  Prop,
  Mixins,
  Emit,
} from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import SubmitGem from '@/store/modules/submit-gem';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import { StoneType } from '@/models/submit-gem';

@Component({
  mixins: [validationMixin],
})
export default class StepSelectGem extends Vue {
  public submitGem = getModule(SubmitGem);
  public get stoneCount() {
    return this.submitGem.stoneCount;
  }
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
  private validateForm() {
    if (this.form.stoneCount && this.form.stoneCount > 0) {
      this.submitGem.setStoneType(this.form.stoneType);
      this.submitGem.setStoneCount(this.form.stoneCount);
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