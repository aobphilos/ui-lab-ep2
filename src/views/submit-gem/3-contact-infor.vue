<template>
  <!-- Stepper Container Start -->
  <section id="step_contact_info" class>
    <div class="container">
      <div class="row margin-t20">
        <div class="columns">
          <span>{{ $t('content.submitGem.stepper.stepThree.set1.subject') }}</span>
          <div class="margin-t10"></div>
          <div class="margin-t10"></div>
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

@Component
export default class StepContactInfo extends Vue {
  public submitGem = getModule(SubmitGem);
  public form = {
    item1: true,
  };
  public created() {
    this.$root.$on('validate-step-3', this.validateForm);
  }
  public mounted() {
    this.validateForm();
  }
  @Watch('form', { deep: true })
  private validateForm() {
    if (this.form.item1) {
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
