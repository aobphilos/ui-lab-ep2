<template>
  <div>
    <loader-fade-out />
    <!-- Services heading-->
    <section id="services_header" class="section_header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h4 class="h4-type3">{{ $t('menu.services') }}</h4>
            <div class="border-bar4 margin-t20"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services heading end-->
    <!-- Services -->
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div class="row padding-tb50">
              <div class="col-md-11">
                <h4 class="h4-type1">
                  {{ $t('content.services.section.notice.lines[0]') }}
                </h4>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-xs-12 imgage-box">
            <div class="row padding-tb25">
              <a href="/img/services/full/service-1.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-1.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-2.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-2.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-3.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-3.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-4.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-4.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-5.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-5.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-6.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-6.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-7.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-7.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-8.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-8.jpg" alt="Services" />
              </a>
            </div>
            <div class="row padding-tb25">
              <a href="/img/services/full/service-9.jpg" data-lightbox="service-lightbox">
                <img src="/img/services/service-9.jpg" alt="Services" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services  end-->
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
export default class PageServices extends Vue {
  public mounted() {
    $('.parallax-mirror').hide();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#services {
  .imgage-box {
    .padding-tb25 {
      padding: 15px 0;
      margin: 10px 0;
      text-align: center;
      border: 2px solid lightgray;
      border-radius: 25px;
    }
  }
  ol {
    list-style: decimal;
    padding: 0 0 0 35px;
  }
  .example {
    padding: 0 0 0 20px;
  }
  .notice {
    font-style: normal;
    color: red;
    font-weight: 600;
    font-size: 15px;
  }
}
</style>
