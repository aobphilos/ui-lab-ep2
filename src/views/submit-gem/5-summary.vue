<template>
  <!-- Stepper Container Start -->
  <section id="step_summary" ref="content">
    <div class="container">
      <div class="row margin-t20">
        <div style="col-xs-12">
          <div class="row">
            <div class="col-sm-10 col-xs-9">
              <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepFive.set1.subject') }}</h4>
            </div>
            <div class="col-sm-2 col-xs-3 text-center">
              <button class="btn btn-primary" @click="printSummary">Export PDF</button>
            </div>
          </div>
          <div id="content_export" class="row">
            <div class="col-xs-10">
              <ol type="I">
                <li class="margin-t20">
                  {{$t('content.submitGem.stepper.stepOne.title')}}
                  <ul class="question">
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepOne.set1.subject') }}</span>
                      <span class="answer">-</span>
                      <span class="answer">{{ submitGem.stoneTypeText }}</span>
                    </li>
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepOne.set2.subject') }}</span>
                      <span class="answer">-</span>
                      <span class="answer">{{ submitGem.stoneCount }}</span>
                    </li>
                  </ul>
                </li>
                <li class="margin-t20">
                  {{$t('content.submitGem.stepper.stepTwo.title')}}
                  <ul class="question">
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepTwo.set1.subject') }}</span>
                      <span class="answer">-</span>
                      <span class="answer">{{ submitGem.mountingTypeText }}</span>
                    </li>
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepTwo.set2.subject') }}</span>

                      <div
                        class="row margin-t10"
                        v-for="(photo, idx) in submitGem.stonePhotos"
                        :key="idx"
                      >
                        <div class="col-xs-12">
                          <p class="answer">url: {{ photo.path }}</p>
                          <p class="answer">detail: {{ photo.description }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepTwo.set3.subject') }}</span>
                      <span class="answer">-</span>
                      <span class="answer">{{ submitGem.reportTypeText }}</span>
                      <div v-show="form.isIncludeSealingCard">
                        <span class="answer">+</span>
                        <span
                          class="answer"
                        >{{ $t('content.submitGem.stepper.stepTwo.set3.extra1') }}</span>
                      </div>
                      <div v-show="form.isIncludeOriginalReport">
                        <span class="answer">+</span>
                        <span
                          class="answer"
                        >{{ $t('content.submitGem.stepper.stepTwo.set3.extra3') }}</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="margin-t20">
                  {{$t('content.submitGem.stepper.stepThree.title')}}
                  <ul class="question">
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepThree.set1.subject') }}</span>
                      <div>
                        <span class="answer">{{ form.contact }}</span>
                      </div>
                    </li>
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepThree.set2.subject') }}</span>
                      <div>
                        <span class="answer">{{ form.address }}</span>
                      </div>
                    </li>
                    <li>
                      <span
                        class="p-type-5"
                      >{{ $t('content.submitGem.stepper.stepThree.set3.subject') }}</span>
                      <div>
                        <span class="answer">{{ form.returnAddress }}</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ol>
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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component
export default class StepSummary extends Vue {
  public submitGem = getModule(SubmitGem);

  public form = {
    isIncludeSealingCard: false,
    isIncludeOriginalReport: false,
    contact: '',
    address: '',
    returnAddress: '',
  };

  public created() {
    this.$root.$on('refresh-report', this.refreshReport);
  }

  public get model() {
    return this.$store.state.submitGem.model;
  }

  public refreshReport() {
    this.form = {
      isIncludeSealingCard: this.model.report.isIncludeSealingCard,
      isIncludeOriginalReport: this.model.report.isIncludeOriginalReport,
      contact: JSON.stringify(this.model.contact, null, 2),
      address: JSON.stringify(this.model.address, null, 2),
      returnAddress: JSON.stringify(this.model.returnAddress, null, 2),
    };
  }

  public mounted() {
    this.refreshReport();
    this.$emit('can-continue', { value: true });
  }

  public printSummary() {
    const doc = new jsPDF();
    /** WITH CSS */
    const canvasElement = document.createElement('canvas');
    const htmlContent = $('#content_export')[0];
    html2canvas(htmlContent, { canvas: canvasElement }).then((canvas: any) => {
      const img = canvas.toDataURL('image/png');
      doc.addImage(img, 'JPEG', 20, 20);
      doc.save('submit-gem.pdf');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
section {
  .container {
    width: 95%;
  }
  min-height: 250px;
  padding-left: 40px;

  ol {
    list-style: upper-roman;
    ul.question {
      padding-left: 18px;
      list-style: disc;
      li {
        padding-top: 10px;
      }
      .answer {
        padding-left: 10px;
        font-weight: bolder;
      }
    }
  }
}
</style>
