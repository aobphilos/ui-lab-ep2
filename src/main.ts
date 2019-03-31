// import '@babel/polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Directives from './directives';

Vue.config.productionTip = false;
Directives.register();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
