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
    setTimeout(() => (this.show = false), 400); // hide the message after 0.4 seconds
  }
}
</script>

<style lang="less" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  #loader {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #fff;
  }
  .cssload-loader {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    margin: 3em;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    background: rgb(0, 0, 0);
  }

  .cssload-loader,
  .cssload-loader:before,
  .cssload-loader:after {
    animation: 1.15s infinite ease-in-out;
    -o-animation: 1.15s infinite ease-in-out;
    -ms-animation: 1.15s infinite ease-in-out;
    -webkit-animation: 1.15s infinite ease-in-out;
    -moz-animation: 1.15s infinite ease-in-out;
  }

  .cssload-loader:before,
  .cssload-loader:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .cssload-loader {
    animation-name: cssload-loader;
    -o-animation-name: cssload-loader;
    -ms-animation-name: cssload-loader;
    -webkit-animation-name: cssload-loader;
    -moz-animation-name: cssload-loader;
  }

  @keyframes cssload-loader {
    from {
      transform: scale(0);
      opacity: 1;
    }

    to {
      transform: scale(1);
      opacity: 0;
    }
  }

  @-o-keyframes cssload-loader {
    from {
      -o-transform: scale(0);
      opacity: 1;
    }

    to {
      -o-transform: scale(1);
      opacity: 0;
    }
  }

  @-ms-keyframes cssload-loader {
    from {
      -ms-transform: scale(0);
      opacity: 1;
    }

    to {
      -ms-transform: scale(1);
      opacity: 0;
    }
  }

  @-webkit-keyframes cssload-loader {
    from {
      -webkit-transform: scale(0);
      opacity: 1;
    }

    to {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @-moz-keyframes cssload-loader {
    from {
      -moz-transform: scale(0);
      opacity: 1;
    }

    to {
      -moz-transform: scale(1);
      opacity: 0;
    }
  }
</style>
