<template>
  <!-- Stepper Container Start -->
  <section id="step_summary" class>
    <div class="container">
      <div class="row margin-t20">
        <div style="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepFive.set1.subject') }}</h4>
          <p
            class="p-type-5 color-grey margin-t10"
          >Vestibulum facilisis accumsan ante, vitae bibendum sem ornare sed. Nulla vitae maximus odio. Donec sed turpis ex. Fusce eget arcu tincidunt, porta leo et, pulvinar odio. Donec tincidunt odio tellus, a maximus felis faucibus in. Vestibulum vitae ante et ex sagittis cursus. Duis ullamcorper lobortis molestie.</p>
          <p
            class="p-type-5 color-grey margin-t10"
          >Sed ornare ligula eu diam maximus vehicula. Sed vel venenatis tortor. Morbi sed nulla mi. Nam dapibus ante vitae risus tincidunt, id rhoncus metus bibendum. Aenean vitae turpis eleifend velit scelerisque egestas a aliquam ante. In nulla mi, efficitur ac ex et, consectetur fermentum purus. Cras blandit augue ante, non sodales justo ultrices vitae. Nulla placerat, lacus id ultrices facilisis, nulla mauris accumsan ante, eget scelerisque augue lectus ac nunc.</p>
          <p
            class="p-type-5 color-grey margin-t10"
          >In ac tortor et urna molestie porta. Nunc volutpat gravida cursus. Nullam vitae felis non erat venenatis elementum. Praesent vulputate vitae justo dapibus vulputate. Praesent et ornare purus. In hac habitasse platea dictumst. Vestibulum egestas dui vel orci posuere efficitur. Vestibulum dui diam, mattis in justo quis, mollis imperdiet ante.</p>
          <p
            class="p-type-5 color-grey margin-t10"
          >Mauris lacinia odio ut aliquet feugiat. Mauris velit massa, placerat a tellus non, tempus dictum purus. Morbi id urna at mi feugiat dignissim. In nec mollis est. Sed tempor at odio scelerisque maximus. Curabitur id ornare quam. Etiam tincidunt erat ut posuere finibus.</p>

          <p
            class="p-type-5 color-grey margin-t10"
          >Quisque tincidunt sapien nec turpis fermentum, eget consectetur diam volutpat. Nam sodales urna ut lectus lobortis placerat. In suscipit in eros ut pulvinar. Aliquam sagittis, justo id ultrices suscipit, nunc lacus fermentum nibh, sit amet semper metus eros vel ante. Sed facilisis tellus lacus, quis dignissim nulla dignissim eu. Integer dapibus quam sed blandit faucibus. Integer tortor neque, luctus sed orci vel, convallis efficitur augue. Pellentesque vitae malesuada tellus, a maximus nibh. Aenean lacinia commodo elit, nec hendrerit felis consectetur commodo. Nunc at ligula nibh. In ac ante vestibulum, viverra odio vitae, malesuada metus. Integer sed libero id sapien consequat vulputate.</p>
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
export default class StepSummary extends Vue {
  public submitGem = getModule(SubmitGem);

  public mounted() {
    this.$emit('can-continue', { value: true });
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
}
</style>
