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
    <section id="whoweare" class="padding-tb50">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div>
              <img src="/img/whoweare.jpg" alt>
            </div>
          </div>
          <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div class="margin-t20"></div>
            <p
              class="p-type-5 color-grey margin-t20"
            >{{ JSON.stringify($store.submitGemModel) }}</p>
            <div class="margin-t20"></div>
            <p
              class="p-type-5 color-grey margin-t20"
            >{{ $t('content.aboutUs.section.overview.lines[1]')}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- GEMOLOGY end-->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoaderFadeOut from '@/components/LoaderFadeOut.vue';

@Component({
  components: {
    LoaderFadeOut,
  },
})
export default class SubmitGem extends Vue {
  public mounted() {
    $('.parallax-mirror').hide();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @media (max-width: 991px) {
  }
</style>
