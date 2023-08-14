import Vue from "vue";

export class FlexSlider {
  public static init(): void {
    Vue.directive("flex-slider", (el) => {
      $(el).flexslider({
        animation: "slide",
        controlNav: true,
        easing: "easeInCubic",
        slideshowSpeed: 5500,
        animationSpeed: 1300,
        pauseOnAction: true,
        touch: true,
        keyboard: true,
        after: () => {
          $(".flex-active-slide")
            .find(".flex-caption")
            .hide()
            .delay(0)
            .show(0)
            .addClass("animated");
        },
        before: () => {
          $(el)
            .find(".flex-caption")
            .fadeOut(200)
            .removeClass("animated");
          $(".flex-active-slide")
            .find(".flex-caption")
            .css("transform", "");
        },
      });
    });
  }
}
