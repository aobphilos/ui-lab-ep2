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
import { Component, Vue } from "vue-property-decorator";
import LocaleChanger from "@/components/LocaleChanger.vue";

@Component({
  components: { LocaleChanger },
})
export default class SectionHeader extends Vue {
  public mounted() {
    const navigation = $("#navigation");
    const navigationButton = navigation.find(".nav-btn-open");
    navigationButton.off("click").on("click", (e) => {
      const $el = $(e.currentTarget);
      if ($el.hasClass("ti-menu")) {
        navigation.css("height", "100%");
        $el.removeClass("ti-menu").addClass("ti-close");
      } else {
        navigation.css("height", "75px");
        $el.removeClass("ti-close").addClass("ti-menu");
      }
    });
  }
}
</script>
<style lang="less" scoped>
  #navigation {
    height: 75px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    border-bottom: 1px solid rgba(221, 221, 221, 0.2);
    transition: all 0.5s ease;
    overflow: hidden;
    &.color_navigation {
      background-color: #000;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
    }
    .locale-changer-small {
      position: relative;
      float: right;
      right: 75px;
      width: 70px;
      top: -3px;
    }
    .main-nav-logo {
      height: 55px;
      margin: 10px 0;
    }
    .main-nav {
      height: 75px;
      li {
        display: inline-block;
        a {
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 700;
          padding: 33px 10px 34px;
          border-bottom: 1px solid rgba(0, 0, 0, 0);
          display: inline-block;
          transition: all 0.5s ease;
          font-family: "Gothic", sans-serif;
          &:hover {
            color: #dea700;
            border-bottom: 1px solid #dea700;
          }
        }
      }
    }
    .nav-btn-open {
      color: #fff;
      display: block;
      width: 50px;
      height: 50px;
      float: right;
      margin: 12px 5px;
      text-align: center;
      padding-top: 15px;
      font-size: 20px;
      cursor: pointer;
    }
    @media (max-width: 991px) {
      & {
        background-color: #000;
        overflow: hidden;
        width: 100%;
        padding-bottom: 50px;
        .main-nav {
          height: 100%;
          li {
            display: inline-block;
            width: 100%;
            a {
              padding: 15px;
            }
          }
        }
        .login-btn {
          float: none !important;
          margin: 15px auto;
          display: table;
        }
      }
    }
    @media (max-width: 425px) {
      .locale-changer-small {
        right: 53px;
      }
    }
  }
</style>

