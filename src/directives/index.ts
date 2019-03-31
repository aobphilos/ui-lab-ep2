import { FlexSlider } from './flexslider';

const invokePlugins = () => {
  return [$, $.fn.flexslider, $.fn.parallax];
};

export default {
  register: () => {
    // invoke all 3th-party
    invokePlugins();

    // Register a global custom directive called `v-fade-out`
    FlexSlider.init();
  },
};
