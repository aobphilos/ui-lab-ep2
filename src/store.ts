import Vue from 'vue';
import Vuex from 'vuex';
import sumitGem from './stores/submitGem';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sumitGem,
  },
  mutations: {},
  actions: {},
});
