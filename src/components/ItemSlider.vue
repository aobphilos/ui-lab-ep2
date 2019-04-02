<template>
  <!-- flexslider  -->
  <section id="slider">
    <div class="flexslider flexslide-container" v-flex-slider>
      <ul class="slides">
        <li class="bg-img-1">
          <div class="flex-caption fadeInUp animated container">
            <p class="p-type-1">&nbsp;</p>
            <h5 class="h5-type-1 margin-t20">ENSURE THE TRUST IN GEMS</h5>
            <div class="border-bar margin-t20"></div>
            <p class="p-type-2 margin-t20 text-justify">&nbsp;</p>
          </div>
        </li>
        <li class="bg-img-2">
          <div class="flex-caption fadeInUp animated container">
            <p class="p-type-1">&nbsp;</p>
            <h5 class="h5-type-1 margin-t20">ANY GEMSTONE KNOWLEDGE</h5>
            <div class="border-bar margin-t20"></div>
            <p class="p-type-2 margin-t20 text-justify">&nbsp;</p>
          </div>
        </li>
        <li class="bg-img-3">
          <div class="flex-caption fadeInUp animated container">
            <p class="p-type-1">&nbsp;</p>
            <h5 class="h5-type-1 margin-t20">GCILAB.COM</h5>
            <div class="border-bar margin-t20"></div>
            <p class="p-type-2 margin-t20 text-justify">&nbsp;</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- flexslider end -->
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ItemSlider extends Vue {}
</script>

<style scoped lang="less">
  #slider {
    width: 100%;
    height: 100vh;
    background-color: black;
    img {
      width: 100%;
      height: 100%;
    }
    .flexslide-container {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      .bg-img-1 {
        background-image: url(/img/slides/slide1.jpg);
      }
      .bg-img-2 {
        background-image: url(/img/slides/slide2.jpg);
        .flex-caption {
          width: 63%;
          float: right;
        }
        @media (max-width: 991px) {
          .flex-caption {
            width: inherit;
            float: inherit;
          }
        }
      }
      .bg-img-3 {
        background-image: url(/img/slides/slide3.jpg);
      }
      .flex-caption {
        margin-top: 30vh;
        color: #fff;
        font-size: 14px;
        .p-type-2 {
          max-width: 800px;
        }
        .h5-type-1 {
          text-align: left;
        }
        @media (max-width: 991px) {
          & {
            left: 10%;
            width: 80%;
            text-align: center;
          }
          .h5-type-1 {
            text-align: center;
            font-size: 32px;
          }
          .border-bar {
            margin: 15px auto;
          }
          .p-type-2 {
            letter-spacing: 0px;
            text-align: center;
          }
        }
      }
    }

    @media (max-width: 991px) {
      .flexslider:hover {
        .flex-direction-nav {
          .flex-next {
            right: 0 !important;
          }
          .flex-prev {
            left: 0 !important;
          }
        }
      }
    }
  }
</style>
<style lang="less">
  .flexslider {
    .slides {
      li {
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .flex-viewport {
      &,
      & ul {
        height: 100%;
      }
    }
  }
</style>

