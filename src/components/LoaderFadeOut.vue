<template>
  <!--  Loader -->
  <transition appear name="fade" v-on:enter="enter">
    <div v-if="show" id="loader">
      <div class="wrapper">
        <div class="cssload-loader"></div>
      </div>
    </div>
  </transition>
  <!--  Loader End -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LoaderFadeOut extends Vue {
  private show: boolean = true;
  private enter(el: any, done: any) {
    setTimeout(() => this.show = false, 500); // hide the message after 0.5 seconds
  }
}
</script>

<style lang="less" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
