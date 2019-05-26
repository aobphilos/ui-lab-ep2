<template>
  <!-- Stepper Container Start -->
  <section id="step_policy_payment" class>
    <div class="container">
      <div class="row margin-t20">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepFour.set1.subject') }}</h4>
          <div class="margin-t10">
            <textarea readonly class="text-readonly p-type-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem a varius auctor. Curabitur ut felis tempor, vestibulum erat eget, mollis risus. Praesent interdum, arcu vel pretium condimentum, eros tortor fringilla lectus, ut consectetur nisl eros vel mauris. Aenean non dignissim nulla, sed hendrerit lectus. Mauris a orci nec nisi auctor maximus. Integer at tempor nisi. Cras sollicitudin, sapien tempus lobortis imperdiet, augue velit commodo odio, id suscipit purus nunc sed augue. Mauris risus sem, mattis quis urna ac, cursus lacinia odio. Nunc blandit lobortis urna, convallis feugiat est pretium in. Fusce hendrerit molestie scelerisque. Praesent ipsum tortor, mattis ac euismod at, malesuada et dolor. Curabitur eu porta elit. Aenean quis suscipit lorem.

Fusce condimentum orci rhoncus, viverra eros sit amet, euismod eros. Nam pretium eros quis posuere elementum. Morbi feugiat eu sapien ac tincidunt. Pellentesque laoreet ligula a imperdiet hendrerit. Vestibulum aliquet nisi in lorem lacinia maximus. Aliquam tristique dui non lectus congue, sed porttitor risus sagittis. Vivamus mollis mauris ut ligula interdum aliquam. Nullam iaculis rutrum enim sed egestas. Vivamus et porta purus, ac lobortis felis. Aliquam purus risus, tincidunt ut tincidunt non, pellentesque quis felis. Aliquam sit amet nulla arcu. Morbi efficitur vel magna ac condimentum.

Vivamus facilisis varius tempus. Morbi tristique porta semper. Praesent vel turpis ligula. Ut nisi libero, euismod vitae dolor vitae, sollicitudin dapibus nulla. In ultrices, eros quis mattis pulvinar, est enim facilisis est, et pretium dolor nulla et tellus. Donec convallis sed urna in sodales. Sed quis urna facilisis, vestibulum arcu non, convallis ipsum. Quisque eget posuere erat. Aliquam quis neque eu eros rutrum bibendum. Nunc diam nunc, dapibus id mattis vitae, lacinia in urna. Quisque elit massa, accumsan et dapibus id, mattis at ante.

Curabitur laoreet consequat tincidunt. In gravida tempus justo, nec interdum est tincidunt maximus. Phasellus sollicitudin lacus at metus lobortis pharetra. Sed ultricies mi nec massa tincidunt accumsan. Vestibulum non mauris vel lectus volutpat vehicula id sed lorem. Vivamus sapien erat, viverra nec purus ac, dignissim malesuada purus. Aenean non dictum tortor. Integer volutpat imperdiet tellus et mollis.

Morbi mi sapien, suscipit ut aliquam eget, vehicula vitae odio. Ut suscipit non elit vitae cursus. Mauris imperdiet, velit id tristique convallis, dolor libero congue massa, vel euismod massa turpis sit amet magna. Aenean mauris ex, lacinia nec augue nec, tristique egestas libero. Suspendisse enim turpis, mollis vitae ullamcorper sed, blandit at risus. Vestibulum pretium tempus enim sed tincidunt. Nam quis ex neque.</textarea>
          </div>
          <div class="margin-t10">
            <div id="example-3">
              <input type="checkbox" id="acceptTerms" v-model="form.acceptTerms">
              <label
                for="acceptTerms"
                class="padding-l10 p-type-5"
              >{{ $t('content.submitGem.stepper.stepFour.set1.accept') }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row margin-t40">
        <div class="columns">
          <h4 class="h4-type1">{{ $t('content.submitGem.stepper.stepFour.set2.subject') }}</h4>
          <p
            class="p-type-5 color-grey margin-t10"
          >Etiam facilisis mattis lectus, vel aliquam odio egestas ut. Nam eget nunc tellus. Aenean interdum ut eros sit amet consequat. Sed ac eleifend ante. Integer eleifend arcu vitae suscipit molestie. Integer faucibus sollicitudin pretium. Donec dapibus leo massa. Donec purus lectus, tristique a lorem at, porta sagittis augue. Nam egestas dui magna, eget sodales sapien tristique eu. Cras mollis dapibus massa in elementum.</p>
          <p
            class="p-type-5 color-grey margin-t10"
          >In sed sodales neque, eget efficitur turpis. Integer mi felis, laoreet ut feugiat et, vehicula id risus. Nunc blandit eu massa ut blandit. Quisque eu arcu posuere, vulputate mi nec, viverra mauris. Curabitur tempus mi sit amet lacinia luctus. Nullam scelerisque nunc odio, eu hendrerit nibh elementum nec. Etiam non laoreet nibh.</p>
          <p
            class="p-type-5 color-grey margin-t10"
          >Fusce et aliquam dui, a lacinia justo. Sed dignissim pretium neque. Sed pellentesque, tortor quis elementum fringilla, orci massa vestibulum tortor, vel malesuada mauris sem in diam. Donec et mauris ac augue euismod aliquam. Cras ultricies porta est, nec tempor odio semper nec. Vivamus laoreet augue sit amet enim viverra finibus. Pellentesque turpis arcu, ornare non ante at, bibendum dictum lorem. Nunc commodo mi mauris, ac ultrices odio euismod id. Aliquam laoreet quis purus vel lacinia. Nam lacinia sem eget condimentum sollicitudin. Nulla eu mollis justo. Praesent porta vehicula odio id consequat. Cras non dolor porta, venenatis nisi vitae, vestibulum tellus. Aenean mi dui, facilisis in tortor vitae, dignissim hendrerit nulla. Sed facilisis efficitur tincidunt.</p>
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
export default class StepPolicyPayment extends Vue {
  public submitGem = getModule(SubmitGem);

  public form = {
    acceptTerms: false,
  };

  public created() {
    this.$root.$on('validate-step-4', this.validateForm);
    this.$root.$on('commit-step-4', this.commitStep);
  }

  private async commitStep(next: any) {
    if (this.form.acceptTerms) {
      await this.$nextTick();
      next();
      this.$root.$emit('refresh-report');
    }
  }

  @Watch('form', { deep: true })
  private validateForm() {
    if (this.form.acceptTerms) {
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
  .container {
    width: 95%;
  }
  min-height: 250px;
  padding-left: 40px;
  .text-readonly {
    width: 90%;
    min-height: 205px;
  }
  @media (max-width: 768px) {
    .text-readonly {
      width: 100%;
    }
  }
}
</style>
