import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Directives from './directives';
import i18n from './i18n';
import VeeValidate from 'vee-validate';
import FirebaseApp from './plugins/firebase';

Vue.config.productionTip = false;

Directives.register();

Vue.use(VeeValidate, { aria: true });
Vue.use(FirebaseApp);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
