<template>
  <div>
    <loader-fade-out/>

    <!-- About us heading-->
    <section id="submitgem_header" class="section_header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h4 class="h4-type3">{{ $t('menu.submitGem') }}</h4>
            <div class="border-bar4 margin-t20"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- About us heading end-->
    <!-- GEMOLOGY -->
    <section id="submit_gem" class="padding-tb50">
      <div class="container">
        <div class="row">
          <div class="columns">
            <horizontal-stepper
              id="mainStepper"
              :steps="submitSteps"
              @completed-step="completeStep"
              @active-step="isStepActive"
              @before-next-step="beforeNextStep"
              @stepper-finished="sendForm"
            ></horizontal-stepper>
          </div>
        </div>
      </div>
    </section>
    <!-- GEMOLOGY end-->
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import LoaderFadeOut from "@/components/LoaderFadeOut.vue";
import SubmitGem from "@/store/modules/submit-gem";
import { StonePhoto } from "@/models/submit-gem";
import HorizontalStepper from "vue-stepper";

// This components will have the content for each stepper step.
import Step1 from "@/views/submit-gem/1-select-gem.vue";
import Step2 from "@/views/submit-gem/2-report-service.vue";
import Step3 from "@/views/submit-gem/3-contact-infor.vue";
import Step4 from "@/views/submit-gem/4-policy-payment.vue";
import Step5 from "@/views/submit-gem/5-summary.vue";

import * as firebase from "firebase/app";
import "firebase/firestore";
import FirebaseApp from "../plugins/firebase";

@Component({
  components: {
    LoaderFadeOut,
    HorizontalStepper
  }
})
export default class PageSubmitGem extends Vue {
  public submitGem = getModule(SubmitGem);
  public submitSteps = [
    {
      icon: "select_all",
      name: "step_select_gem",
      title: "SELECT A GEMSTONE",
      subtitle: "",
      component: Step1,
      completed: false
    },
    {
      icon: "business_center",
      name: "step_report_service",
      title: "REPORTS & SERVICES",
      subtitle: "",
      component: Step2,
      completed: false
    },
    {
      icon: "contacts",
      name: "step_contact_info",
      title: "CONTACT INFORMATION",
      subtitle: "",
      component: Step3,
      completed: false
    },
    {
      icon: "redeem",
      name: "step_policy_payment",
      title: "POLICY & PAYMENT",
      subtitle: "",
      component: Step4,
      completed: false
    },
    {
      icon: "send",
      name: "step_summary",
      title: "SUMMARY",
      subtitle: "",
      component: Step5,
      completed: false
    }
  ];

  private db = firebase.firestore();

  @Watch("$i18n.locale")
  public onLocaleChange(val: any) {
    this.getStepperTitle();
  }

  // Executed when @completed-step event is triggered
  public completeStep(payload: any) {
    this.submitSteps.forEach((step, idx) => {
      if (step.name === payload.name) {
        step.completed = true;
      }
    });
  }
  // Executed when @active-step event is triggered
  public isStepActive(payload: any) {
    this.submitSteps.forEach((step, idx) => {
      if (step.name === payload.name) {
        this.$root.$emit(`validate-step-${idx + 1}`);
        if (step.completed === true) {
          step.completed = false;
        }
      }
    });
  }

  public beforeNextStep({ currentStep }: any, next: any) {
    this.submitSteps.forEach((step, idx) => {
      if (step.name === currentStep.name) {
        if (step.name === "step_policy_payment") {
          this.sumbitForm(next);
        } else {
          this.$root.$emit(`commit-step-${idx + 1}`, next);
        }
      }
    });
  }

  // Executed when @stepper-finished event is triggered
  public sendForm(payload: any) {
    alert(" Success ");
    this.$router.push("/");
  }

  public created() {
    this.getStepperTitle();
  }

  public mounted() {
    $(".parallax-mirror").hide();
  }

  private sumbitForm(next: any) {
    this.db
      .collection("submit-gem")
      .add(this.submitGem.model)
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      })
      .finally(() => {
        this.$nextTick().then(() => next(true));
      });
  }

  private getStepperTitle() {
    const titleStep1 = this.$t(
      "content.submitGem.stepper.stepOne.title"
    ).toString();
    const titleStep2 = this.$t(
      "content.submitGem.stepper.stepTwo.title"
    ).toString();
    const titleStep3 = this.$t(
      "content.submitGem.stepper.stepThree.title"
    ).toString();
    const titleStep4 = this.$t(
      "content.submitGem.stepper.stepFour.title"
    ).toString();
    const titleStep5 = this.$t(
      "content.submitGem.stepper.stepFive.title"
    ).toString();

    this.submitSteps[0].title = titleStep1;
    this.submitSteps[1].title = titleStep2;
    this.submitSteps[2].title = titleStep3;
    this.submitSteps[3].title = titleStep4;
    this.submitSteps[4].title = titleStep5;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#submit_gem {
  .top {
    .steps-wrapper {
      width: 100%;
    }
  }
}
@media (max-width: 991px) {
}
</style>
