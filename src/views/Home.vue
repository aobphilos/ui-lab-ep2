<template>
  <div>
    <loader-fade-out/>
    <item-slider/>
    <!-- seperate block -->
    <section class="padding-tb25 hidden-sm hidden-xs">&nbsp;</section>
    <!-- seperate block end -->
    <!-- GEMOLOGY -->
    <section id="whoweare">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 padding-tb100"
          >
            <h4 class="h4-type2 margin-t10">{{ $t('content.home.section.services.subject')}}</h4>
            <div class="border-bar margin-t20"></div>
            <p
              class="p-type-3 color-grey margin-t20"
            >{{ $t('content.home.section.services.detail')}}</p>
            <router-link
              to="services"
              rel="tooltip"
              title="READ MORE"
              class="btn login-btn"
            >{{ $t('content.home.section.services.button')}}</router-link>
          </div>
          <div
            class="col-md-6 col-xs-12 parallax-window"
            data-parallax="scroll"
            data-image-src="/img/whoweare.jpg"
            data-speed="0.4"
          ></div>
        </div>
      </div>
    </section>
    <!-- GEMOLOGY end-->
    <!-- VERIFY -->
    <section id="whoweare">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-xs-12 parallax-window"
            data-parallax="scroll"
            data-image-src="/img/verify.jpg"
            data-speed="0.4"
          ></div>
          <div
            class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 padding-tb100"
          >
            <h4 class="h4-type2 margin-t10">{{ $t('content.home.section.verifyReport.subject')}}</h4>
            <div class="border-bar margin-t20"></div>
            <p class="p-type-3 color-grey margin-t20"></p>
            <router-link
              to="verify"
              rel="tooltip"
              title="MORE COLLECTION"
              class="btn login-btn"
            >{{ $t('content.home.section.verifyReport.button')}}</router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- VERIFY end-->
    <!-- portfolio -->
    <section id="portfolio" class="padding-tb100">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4 class="h4-type2 text-center">{{ $t('content.home.section.gallery.subject')}}</h4>
            <div class="border-bar2 margin-t20"></div>
          </div>
        </div>

        <div class="row margin-t50">
          <div class="col-md-4 margin-t30">
            <div class="portfolio-item">
              <a href="/img/portfolio/full/item1.jpg" data-lightbox="portfolio">
                <img src="/img/portfolio/item1.jpg" alt>
              </a>
            </div>
          </div>

          <div class="col-md-4 margin-t30">
            <div class="portfolio-item">
              <a href="/img/portfolio/full/item2.jpg" data-lightbox="portfolio">
                <img src="/img/portfolio/item2.jpg" alt>
              </a>
            </div>
          </div>

          <div class="col-md-4 margin-t30">
            <div class="portfolio-item">
              <a href="/img/portfolio/full/item3.jpg" data-lightbox="portfolio">
                <img src="/img/portfolio/item3.jpg" alt>
              </a>
            </div>
          </div>

          <div class="col-md-4 margin-t30">
            <div class="portfolio-item">
              <a href="/img/portfolio/full/item4.jpg" data-lightbox="portfolio">
                <img src="/img/portfolio/item4.jpg" alt>
              </a>
            </div>
          </div>

          <div class="col-md-4 margin-t30">
            <div class="portfolio-item">
              <a href="/img/portfolio/full/item5.jpg" data-lightbox="portfolio">
                <img src="/img/portfolio/item5.jpg" alt>
              </a>
            </div>
          </div>

          <div class="col-md-4 margin-t30">
            <div class="portfolio-item">
              <a href="/img/portfolio/full/item6.jpg" data-lightbox="portfolio">
                <img src="/img/portfolio/item6.jpg" alt>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- portfolio end-->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoaderFadeOut from "@/components/LoaderFadeOut.vue";
import ItemSlider from "@/components/ItemSlider.vue";

@Component({
  components: {
    LoaderFadeOut,
    ItemSlider,
  },
})
export default class PageHome extends Vue {
  public mounted() {
    $(".parallax-mirror").show();
    $(".parallax-window").parallax();
  }

  public destroyed() {
    $(".parallax-mirror").hide();
    $(".parallax-window").parallax("destroy");
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .parallax-window {
    height: 500px;
  }
  #portfolio {
    .portfolio-item {
      overflow: hidden;
      margin: 0;
      padding: 0;
      cursor: url(/img/curser.png), auto;
      background-color: #000;
      img {
        transform: scale(1.2);
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
        transition: all 0.8s ease;
        -moz-transition: all 0.8s ease;
        -webkit-transition: all 0.8s ease;
        -ms-transition: all 0.8s ease;
        -o-transition: all 0.8s ease;
        cursor: url(/img/curser.png), auto;
      }
      &:hover {
        img {
          transform: scale(1);
          opacity: 0.4;
        }
      }
    }
  }
  @media (max-width: 991px) {
    #whoweare .login-btn {
      float: left;
    }
  }
</style>
