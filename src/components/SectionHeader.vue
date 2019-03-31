<template>
  <!-- header navigation -->
  <header id="navigation">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <a href="#/">
            <img src="/img/nav-logo.png" alt="GCILab" class="main-nav-logo">
          </a>
          <span class="ti-menu nav-btn-open hidden-md hidden-lg"></span>
        </div>
        <div class="col-md-8 text-center">
          <ul class="main-nav">
            <li>
              <router-link to="about" rel="tooltip" title="About GCILab">About Us</router-link>
            </li>
            <li>
              <router-link to="services" rel="tooltip" title="Services">Services</router-link>
            </li>
            <li>
              <router-link to="verify" rel="tooltip" title="Verify">Verify Report</router-link>
            </li>
            <li>
              <router-link to="contact" rel="tooltip" title="Contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </header>
  <!-- header navigation end -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SectionHeader extends Vue {
  public data() {
    return {
      img: {
        nav_logo: '',
      },
    };
  }
  public mounted() {
    const navigation = $('#navigation');
    const navigationButton = $('.nav-btn-open');
    navigationButton.off('click').on('click', (e) => {
      const $el = $(e.currentTarget);
      if ($el.hasClass('ti-menu')) {
        navigation.css('height', '100%');
        $el.removeClass('ti-menu').addClass('ti-close');
      } else {
        navigation.css('height', '80px');
        $el.removeClass('ti-close').addClass('ti-menu');
      }
    });
  }
}
</script>
