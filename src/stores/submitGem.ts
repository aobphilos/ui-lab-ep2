import { ActionContext } from 'vuex';
import { SubmitGemModel } from '@/models/submit-gem';
import { StonePhoto } from '@/models/submit-gem/StonePhoto';

export default {
  namespaced: true,
  state: new SubmitGemModel(),
  mutations: {
    SET_STONE_PHOTOS(state: SubmitGemModel, photos: StonePhoto[]) {
      state.stonePhotos.splice(state.stonePhotos.length);
      state.stonePhotos.push(...photos);
    },
  },
  actions: {
    setStonePhotos(
      { commit }: ActionContext<SubmitGemModel, StonePhoto[]>,
      photos: StonePhoto[],
    ) {
      commit('SET_STONE_PHOTOS', photos);
    },
  },
  getters: {
    getStonePhotos(state: SubmitGemModel) {
      return state.stonePhotos;
    },
  },
};
