<template>
  <!-- footer -->
  <footer id="footer" class="padding-tb50">
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 col-md-offset-0 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1"
        >
          <div class="col-md-4 padding-tb50">
            <img src="/img/nav-logo-black.jpg" class="footerlogo" alt />
            <p class="copyright">&copy; 2025 GCILAB.COM</p>
          </div>

          <div class="col-md-2 padding-tb50">
            <ul class="main-nav">
              <li>
                <router-link
                  to="/"
                  class="nav-link"
                  rel="tooltip"
                  title="GCILab"
                  >{{ $t("menu.home") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="about"
                  class="nav-link"
                  rel="tooltip"
                  title="About GCILab"
                  >{{ $t("menu.aboutUs") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="services"
                  class="nav-link"
                  rel="tooltip"
                  title="Services"
                  >{{ $t("menu.services") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="verify"
                  class="nav-link"
                  rel="tooltip"
                  title="Verify"
                  >{{ $t("menu.verifyReport") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="contact"
                  class="nav-link"
                  rel="tooltip"
                  title="Contact"
                  >{{ $t("menu.contact") }}</router-link
                >
              </li>
            </ul>
          </div>

          <div class="col-md-1">&nbsp;</div>

          <div class="col-md-5 padding-tb50">
            <div class="contact-details">
              <div>
                <h3 class="p-type-3">{{ $t("address[0].name") }}</h3>
                <div>
                  <p class="p-type-3">
                    {{ $t("address[0].lines[0]") }}
                    <br />
                    {{ $t("address[0].lines[1]") }}
                    <br />
                    {{ $t("address[0].lines[2]") }}
                  </p>
                </div>
                <br />
                <h3 class="p-type-3">{{ $t("address[1].name") }}</h3>
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
              <div>
                <a href="https://lin.ee/wpqtndi" target="_blank" class="link">
                  <img
                    src="/img/social/line.jpg"
                    class="logo webp"
                    title="Line"
                    alt="Line"
                  />
                </a>
                <a
                  href="https://lin.ee/wpqtndi"
                  target="_blank"
                  class="link text webp"
                  >Line official : gcilab</a
                >
                <a href="https://lin.ee/wpqtndi" target="_blank"
                  ><img
                    src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
                    alt="Add Friend"
                    height="36"
                    border="0"
                    style="height: 29px"
                /></a>
              </div>
              <div>
                <img
                  src="/img/social/wechat.svg"
                  class="logo"
                  title="WeChat"
                  alt="WeChat"
                />
                <p class="p-type-4 text">Wechat : gcilab</p>
              </div>
              <div>
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
                <a
                  href="https://www.facebook.com/GCILAB"
                  target="_blank"
                  class="link text"
                  >Facebook : gcilab</a
                >
              </div>
              <div>
                <div class="p-type-3">Tel: +(66)83 916 7158</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer end -->
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SectionFooter extends Vue {}
</script>

<style lang="less" scoped>
#footer {
  background-color: #000;
  .footerlogo {
    width: 150px;
    /* filter: grayscale(1);  */
  }
  ul {
    li {
      a {
        color: #a0a0a0;
        text-decoration: none;
        padding: 6px 0;
        font-size: 12px;
        display: block;
        letter-spacing: 1px;
        font-weight: 600;
        text-transform: uppercase;
        transition: all 0.4s ease;
        &:hover {
          color: #dea700;
        }
      }
    }
  }
  .contact-details {
    div {
      overflow: auto;
      padding: 6px 0;
      a {
        color: #c1c1c1;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 600;
        padding: 0 0 0 10px;

        &.link {
          text-decoration: none;
          color: #fff;
          font-size: 12px;
          letter-spacing: 1px;
          font-weight: 700;
          padding: 3px 0;
          display: inline-block;
          transition: all 0.5s ease;
          font-family: "Gothic", sans-serif;
          &.text {
            padding-left: 6px;
            &.webp {
              padding-left: 8px;
            }
          }
          &:hover {
            color: #dea700;
          }
        }
      }
      p {
        display: block;
        color: #c1c1c1;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 600;
        padding: 0 0 0 30px;
        &.p-type-4.text {
          display: inline;
          padding-left: 5px;
        }
      }
      span {
        display: table-cell;
        float: left;
        color: rgb(234, 234, 234);
        font-weight: 700;
        font-size: 16px;
        vertical-align: middle;
        opacity: 1;
        padding-top: 4px;
      }
    }
    img {
      &.logo {
        width: 32px;
        &.webp {
          width: 24px;
          margin-left: 4px;
        }
      }
    }
  }
  .copyright {
    color: #808280;
    font-size: 12px;
    font-weight: 700;
    padding-top: 20px;
  }
}
</style>
