<template>
  <div>
    <loader-fade-out />
    <!-- Contact us heading-->
    <section id="contact_header" class="section_header">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h4 class="h4-type3">{{ $t("menu.contact") }}</h4>
            <div class="border-bar4 margin-t20"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact us heading end-->
    <!-- enquiry form -->
    <section id="contact_form" class="padding-tb50">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-7 col-xs-12 text-center">
            <img
              src="/img/contact/contact.jpg"
              alt="Design"
              id="imgContactUs"
            />
          </div>
          <div class="col-md-5 col-sm-5 col-xs-12">
            <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
              <h4 class="h4-type1">{{ $t("address[0].name") }}</h4>
              <div>
                <p class="p-type-3">
                  {{ $t("address[0].lines[0]") }}
                  <br />
                  {{ $t("address[0].lines[1]") }}
                  <br />
                  {{ $t("address[0].lines[2]") }}
                </p>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
              <h4 class="h4-type1">{{ $t("address[1].name") }}</h4>
              <div>
                <p class="p-type-3">
                  {{ $t("address[1].lines[0]") }}
                  <br />
                  {{ $t("address[1].lines[1]") }}
                  <br />
                  {{ $t("address[1].lines[2]") }}
                </p>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
              <div class="col-md-1 col-xs-2">
                <a href="https://lin.ee/wpqtndi" target="_blank" class="link">
                  <img
                    src="/img/social/line.jpg"
                    class="logo webp"
                    title="Line"
                    alt="LINE"
                /></a>
              </div>
              <div class="col-md-7 col-xs-6">
                <p class="logo">
                  <a href="https://lin.ee/wpqtndi" target="_blank" class="link"
                    >Line official : gcilab</a
                  >
                </p>
              </div>
              <div class="col-md-4 col-xs-4">
                <a
                  href="/img/contact/full/qr-line-540.jpg"
                  data-lightbox="qr-line-lightbox"
                  data-alt="QR Line"
                >
                  <img
                    src="/img/contact/qr-line.jpg"
                    class="qrcode"
                    alt="QR-LINE"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
              <div class="col-md-1 col-xs-2">
                <img
                  src="/img/social/wechat.svg"
                  class="logo"
                  title="WeChat"
                  alt="WeChat"
                />
              </div>
              <div class="col-md-7 col-xs-6">
                <p class="logo">Wechat : gcilab</p>
              </div>
              <div class="col-md-4 col-xs-4">
                <a
                  href="/img/contact/full/qr-wechat-550.jpg"
                  data-lightbox="qr-wechat-lightbox"
                  data-alt="QR WeChat"
                >
                  <img
                    src="/img/contact/qr-wechat.jpg"
                    class="qrcode"
                    title="WeChat"
                    alt="QR-WeChat"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
              <div class="col-md-1 col-xs-2">
                <a
                  href="https://www.facebook.com/GCILAB"
                  target="_blank"
                  class="link"
                >
                  <img
                    src="/img/social/facebook.svg"
                    class="logo"
                    title="Facebook"
                    alt="Facebook"
                /></a>
              </div>
              <div class="col-md-7 col-xs-6">
                <p class="logo">
                  <a
                    href="https://www.facebook.com/GCILAB"
                    target="_blank"
                    class="link"
                    >Facebook : gcilab</a
                  >
                </p>
              </div>

              <div class="col-md-4 col-xs-4">
                <a
                  href="/img/contact/full/qr-facebook-360.png"
                  data-lightbox="qr-facebook-lightbox"
                  data-alt="QR Facebook"
                >
                  <img
                    src="/img/contact/qr-facebook.png"
                    class="qrcode"
                    title="Facebook"
                    alt="QR-Facebook"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
              <h4 class="h4-type1"></h4>
              <div>
                <p class="p-type-3">Tel: +(66)83 916 7158</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- enquiry form end -->

    <!-- google map -->
    <section id="googlemap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9248918511844!2d100.5174908750305!3d13.722996986665859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298cfdc44a69b%3A0x3e2299762a7ecd46!2sGCi%20Lab!5e0!3m2!1sen!2sth!4v1692083550334!5m2!1sen!2sth"
        height="320"
        style="border:0;"
        allowfullscreen=""
        class="map-frame"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
    <!-- google map end -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoaderFadeOut from "@/components/LoaderFadeOut.vue";

@Component({
  components: {
    LoaderFadeOut,
  },
})
export default class PageContact extends Vue {
  public mounted() {
    $(".parallax-mirror").hide();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#contact_form {
  padding: 50px 0;
  .contact_detail {
    margin: 10px 0;
    border-bottom: 1px solid rgba(221, 221, 221, 0.29);
    span.icon {
      display: inline-block;
      background-color: #fff;
      font-size: 46px;
      text-align: center;
      padding: 12px;
      border: 2px solid #dea700;
      border-radius: 100%;
      color: #ebb103;
      margin: 10px 0;
    }
    p {
      font-size: 16px;
      color: #424242;
      margin: 10px 0 0 0;
      line-height: 1.6;
      padding: 8px;
      text-align: left;
      &.logo {
        margin-top: 16px;
        padding-left: 7%;
      }
    }
    img {
      max-width: unset;
      &.logo {
        width: 48px;
        margin-top: 14px;
        &.webp {
          width: 38px;
          margin-top: 16px;
          margin-left: 3px;
        }
      }
      &.qrcode {
        width: 96px;
      }
    }
    a {
      &.link {
        text-decoration: none;
        color: #424242;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 700;
        padding: 6px 0px;
        display: inline-block;
        transition: all 0.5s ease;
        font-family: "Gothic", sans-serif;
        &:hover {
          color: #dea700;
        }
      }
    }
  }
}

#imgContactUs {
  width: 100%;
}
@media (max-width: 768px) {
  #contact_form {
    padding: 10px 0;
  }
  #imgContactUs {
    width: 93%;
  }
}
</style>

<style lang="less">
#googlemap {
  width: 100%;
  height: 400px;
  .map-frame {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
