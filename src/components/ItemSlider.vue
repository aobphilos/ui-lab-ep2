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
  .bg-img-1 {
    background-image: url(/img/slides/slide1.jpg);
  }
  .bg-img-2 {
    background-image: url(/img/slides/slide2.jpg);
  }
  .bg-img-2 .flex-caption {
    width: 63%;
    float: right;
  }
  .bg-img-3 {
    background-image: url(/img/slides/slide3.jpg);
  }

  @media (max-width: 992px) {
    .bg-img-2 .flex-caption {
      width: inherit;
      float: inherit;
    }
  }

  .h5-type-1 {
    text-align: left;
  }
</style>
