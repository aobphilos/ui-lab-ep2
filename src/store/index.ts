import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from '@/models/root';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0',
  },
});
