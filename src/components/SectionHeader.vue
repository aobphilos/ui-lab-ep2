<template>
  <!-- header navigation -->
  <header id="navigation">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="locale-changer-small hidden-md hidden-lg">
            <locale-changer/>
          </div>
          <a href="#/">
            <img src="/img/nav-logo.png" alt="GCILab" class="main-nav-logo">
          </a>
          <span class="ti-menu nav-btn-open hidden-md hidden-lg"></span>
        </div>
        <div class="col-md-8 text-center">
          <ul class="main-nav">
            <li>
              <router-link to="about" rel="tooltip" title="About GCILab">{{ $t('menu.aboutUs') }}</router-link>
            </li>
            <li>
              <router-link to="services" rel="tooltip" title="Services">{{ $t('menu.services')}}</router-link>
            </li>
            <li>
              <router-link to="verify" rel="tooltip" title="Verify">{{ $t('menu.verifyReport')}}</router-link>
            </li>
            <li>
              <router-link to="contact" rel="tooltip" title="Contact">{{ $t('menu.contact')}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <div class="hidden-xs hidden-sm">
            <locale-changer/>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header navigation end -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LocaleChanger from '@/components/LocaleChanger.vue';

@Component({
  components: { LocaleChanger },
})
export default class SectionHeader extends Vue {
  public mounted() {
    const navigation = $('#navigation');
    const navigationButton = $('.nav-btn-open');
    navigationButton.off('click').on('click', (e) => {
      const $el = $(e.currentTarget);
      if ($el.hasClass('ti-menu')) {
        navigation.css('height', '100%');
        $el.removeClass('ti-menu').addClass('ti-close');
      } else {
        navigation.css('height', '75px');
        $el.removeClass('ti-close').addClass('ti-menu');
      }
    });
  }
}
</script>
<style lang="less" scoped>
  .locale-changer-small {
    width: 60px;
    float: right;
    right: 80px;
    position: relative;
  }
</style>

