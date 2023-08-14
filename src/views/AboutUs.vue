<template>
  <div>
    <loader-fade-out/>

    <!-- About us heading-->
    <section id="about_header" class="section_header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h4 class="h4-type3">{{ $t('menu.aboutUs') }}</h4>
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
            >{{ $t('content.aboutUs.section.overview.lines[0]')}}</p>
            <div class="margin-t20"></div>
            <p
              class="p-type-5 color-grey margin-t20"
            >{{ $t('content.aboutUs.section.overview.lines[1]')}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- GEMOLOGY end-->
    <!-- Diploma Surachart -->
    <section id="diploma-surachart" class="padding-tb50 diploma">
      <div class="container">
        <div class="row testimonial">
          <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <h5>
              {{ $t('content.aboutUs.section.diploma[0].subjects[0]')}}
              <br>
              {{ $t('content.aboutUs.section.diploma[0].subjects[1]')}}
            </h5>
            <div class="margin-t20"></div>
            <div class="p-type-5 color-grey margin-t20">
              <ul>
                <li v-for="line in getDiplomaLines(0)" :key="line.id">{{line}}</li>
              </ul>
            </div>
          </div>
          <div class="col-md-5 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div>
              <a
                href="/img/aboutus/full/diploma-surachart.jpg"
                data-lightbox="diploma-surachart-lightbox"
                data-alt="Diploma Surachart"
              >
                <img src="/img/aboutus/diploma-surachart.jpg" alt="Diploma Patarat">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Diploma Surachart end-->
    <!-- Diploma Patarat -->
    <section id="diploma-patarat" class="padding-tb50 diploma">
      <div class="container">
        <div class="row testimonial">
          <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <h5>
              {{ $t('content.aboutUs.section.diploma[1].subjects[0]')}}
              <br>
              {{ $t('content.aboutUs.section.diploma[1].subjects[1]')}}
            </h5>
            <div class="margin-t20"></div>
            <div class="p-type-5 color-grey margin-t20">
              <ul>
                <li v-for="line in getDiplomaLines(1)" :key="line.id">{{line}}</li>
              </ul>
            </div>
          </div>
          <div class="col-md-5 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div>
              <a
                href="/img/aboutus/full/diploma-patarat.jpg"
                data-lightbox="diploma-patarat-lightbox"
                data-alt="Diploma Patarat"
              >
                <img src="/img/aboutus/diploma-patarat.jpg" alt="Diploma Patarat">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Diploma Patarat end-->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoaderFadeOut from "@/components/LoaderFadeOut.vue";
import { type } from "os";

@Component({
  components: {
    LoaderFadeOut,
  },
})
export default class PageAboutUs extends Vue {
  public mounted() {
    $(".parallax-mirror").hide();
  }
  private getDiplomaLines(index: number) {
    const locale = this.$i18n.getLocaleMessage(this.$i18n.locale);
    if (!locale) {
      return [];
    }
    const content: any = locale.content;
    if (!content) {
      return [];
    }
    const aboutUs: any = content.aboutUs;
    if (!aboutUs) {
      return [];
    }
    const section: any = aboutUs.section;
    if (!section) {
      return [];
    }
    const diploma = section.diploma;
    if (diploma) {
      return diploma[index].lines;
    }
    return [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .testimonial {
    &-text {
      color: #fff;
      font-size: 16px;
      width: 70%;
      margin: 20px 15%;
      line-height: 1.6;
      font-style: italic;
      font-weight: 600;
    }
    h5 {
      color: #dea700;
      font-size: 20px;
      font-family: "Gothic", sans-serif;
      font-weight: bold;
      letter-spacing: 1px;
    }
    h6 {
      color: #fff;
      font-size: 12px;
      font-family: "Gothic", sans-serif;
      padding-top: 10px;
    }
    .slides {
      li {
        padding: 0 0 50px 0;
        margin-right: 0px !important;
      }
    }
    .flex-control-nav {
      position: relative;
    }
  }
  @media (max-width: 991px) {
    section {
      img {
        margin-top: 25px;
      }
    }
  }
</style>
