<template>
  <!-- Stepper Container Start -->
  <section id="step_contact_info" class>
    <div class="container">
      <div class="row margin-t20">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepThree.set1.subject') }}</h4>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="firstName"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.firstName') }}</label>
              </div>
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  v-model="form.contact.firstName"
                  v-validate="'required'"
                >
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="lastName"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.lastName') }}</label>
              </div>
              <div>
                <input
                  id="lastName"
                  name="lastName"
                  v-model="form.contact.lastName"
                  v-validate="'required'"
                >
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="phone"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.phone') }}</label>
              </div>
              <div>
                <input id="phone" name="phone" v-model="form.contact.phone">
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="email"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.email') }}</label>
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  v-model="form.contact.email"
                  v-validate="'required|email'"
                >
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="whatsAppId"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.whatsAppId') }}</label>
              </div>
              <div>
                <input id="whatsAppId" name="whatsAppId" v-model="form.contact.whatsAppId">
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="lineId"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.lineId') }}</label>
              </div>
              <div>
                <input id="lineId" name="lineId" v-model="form.contact.lineId">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row margin-t40">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepThree.set2.subject') }}</h4>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="address1"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.address1') }}</label>
              </div>
              <div>
                <input
                  id="address1"
                  name="address1"
                  v-model="form.address.address1"
                  v-validate="'required'"
                >
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="address2"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.address2') }}</label>
              </div>
              <div>
                <input id="address2" name="address2" v-model="form.address.address2">
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="city"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.city') }}</label>
              </div>
              <div>
                <input id="city" name="city" v-model="form.address.city" v-validate="'required'">
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="state"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.state') }}</label>
              </div>
              <div>
                <input id="state" name="state" v-model="form.address.state" v-validate="'required'">
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="country"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.country') }}</label>
              </div>
              <div>
                <input
                  id="country"
                  name="country"
                  v-model="form.address.country"
                  v-validate="'required'"
                >
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="zipCode"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.zipCode') }}</label>
              </div>
              <div>
                <input
                  id="zipCode"
                  name="zipCode"
                  v-model="form.address.zipCode"
                  v-validate="'required'"
                >
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <input type="checkbox" id="returnGem" v-model="isSameAddress">
              <label
                for="returnGem"
                class="padding-l10 p-type-5"
              >{{ $t('content.submitGem.stepper.stepThree.set2.returnGem') }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row margin-t40">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepThree.set3.subject') }}</h4>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressFirstName"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.firstName') }}</label>
              </div>
              <div>
                <input
                  id="returnAddressFirstName"
                  name="returnAddressFirstName"
                  v-model="form.returnAddress.firstName"
                  v-validate="'required'"
                >
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressLastName"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set1.lastName') }}</label>
              </div>
              <div>
                <input
                  id="returnAddressLastName"
                  name="returnAddressLastName"
                  v-model="form.returnAddress.lastName"
                  v-validate="'required'"
                >
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressAddress1"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set3.address1') }}</label>
              </div>
              <div>
                <input
                  id="returnAddressAddress1"
                  name="returnAddressAddress1"
                  v-model="form.returnAddress.address1"
                  v-validate="'required'"
                >
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressAddress2"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set3.address2') }}</label>
              </div>
              <div>
                <input id="returnAddressAddress2" name="returnAddressAddress2" v-model="form.returnAddress.address2">
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressCity"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.city') }}</label>
              </div>
              <div>
                <input id="returnAddressCity" name="returnAddressCity" v-model="form.returnAddress.city" v-validate="'required'">
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressState"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.state') }}</label>
              </div>
              <div>
                <input id="returnAddressState" name="returnAddressState" v-model="form.returnAddress.state" v-validate="'required'">
              </div>
            </div>
          </div>
          <div class="row margin-t10 padding-l15">
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressCountry"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.country') }}</label>
              </div>
              <div>
                <input
                  id="returnAddressCountry"
                  name="returnAddressCountry"
                  v-model="form.returnAddress.country"
                  v-validate="'required'"
                >
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div>
                <label
                  for="returnAddressZipCode"
                  class="p-type-5"
                >{{ $t('content.submitGem.stepper.stepThree.set2.zipCode') }}</label>
              </div>
              <div>
                <input
                  id="returnAddressZipCode"
                  name="returnAddressZipCode"
                  v-model="form.returnAddress.zipCode"
                  v-validate="'required'"
                >
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
  Contact,
  Address,
  ReturnAddress,
  ReturnInstruction,
} from '@/models/submit-gem';

@Component
export default class StepContactInfo extends Vue {
  public submitGem = getModule(SubmitGem);
  public isSameAddress = false;
  public form = {
    contact: new Contact(),
    address: new Address(),
    returnAddress: new ReturnAddress(),
    returnInstruction: new ReturnInstruction(),
  };
  public created() {
    this.$root.$on('validate-step-3', this.validateForm);
  }
  public mounted() {
    this.validateForm();
  }

  @Watch('isSameAddress')
  private isSameAddressChange(val: any) {
    if (val) {
      this.form.returnAddress = new ReturnAddress(
        this.form.contact.firstName,
        this.form.contact.lastName,
        this.form.address,
      );
    } else {
      this.form.returnAddress = new ReturnAddress();
    }
  }

  @Watch('form', { deep: true })
  private async validateForm() {
    await this.$validator.validate();
    if (
      this.form.contact.firstName &&
      this.form.contact.lastName &&
      this.form.contact.email &&
      this.form.address.address1 &&
      this.form.address.city &&
      this.form.address.state &&
      this.form.address.country &&
      this.form.address.zipCode &&
      this.form.returnAddress.firstName &&
      this.form.returnAddress.lastName &&
      this.form.returnAddress.address1 &&
      this.form.returnAddress.city &&
      this.form.returnAddress.state &&
      this.form.returnAddress.country &&
      this.form.returnAddress.zipCode
    ) {
      this.submitGem.setStep3(
        this.form.contact,
        this.form.address,
        this.form.returnAddress,
        this.form.returnInstruction,
      );
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
