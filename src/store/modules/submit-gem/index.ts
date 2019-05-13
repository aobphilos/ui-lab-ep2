import {
  SubmitGemModel,
  StoneType,
  MountingType,
  StonePhoto,
  ReportType,
} from '@/models/submit-gem';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
// import { get } from 'axios';

@Module({ namespaced: true, dynamic: true, store, name: 'submitGem' })
export default class SubmitGem extends VuexModule {
  public model = new SubmitGemModel();

  public get stonePhotos() {
    return this.model.stonePhotos;
  }

  public get stoneCount() {
    return this.model.stoneCount;
  }

  public get stoneType() {
    return this.model.stoneType;
  }

  public get mountingType() {
    return this.model.mountingType;
  }

  public get reportType() {
    return this.model.reportType;
  }

  @Mutation
  public RESET_MODEL(model: SubmitGemModel) {
    this.model = model;
  }

  @Mutation
  public SET_STONE_PHOTOS(photos: StonePhoto[]) {
    this.model.stonePhotos = photos;
  }

  @Mutation
  public SET_STONE_COUNT(count: number) {
    this.model.stoneCount = count;
  }

  @Mutation
  public SET_STONE_TYPE(stone: StoneType) {
    this.model.stoneType = stone;
  }

  @Mutation
  public SET_MOUNTING_TYPE(mount: MountingType) {
    this.model.mountingType = mount;
  }

  @Mutation
  public SET_REPORT_TYPE(report: ReportType) {
    this.model.reportType = report;
  }

  @Action({ commit: 'RESET_MODEL' })
  public async reset() {
    return new SubmitGemModel();
  }

  @Action({ commit: 'SET_STONE_PHOTOS' })
  public setStonePhotos(photos: StonePhoto[]) {
    return photos;
  }

  @Action({ commit: 'SET_STONE_COUNT' })
  public setStoneCount(count: number) {
    return count;
  }

  @Action({ commit: 'SET_STONE_TYPE' })
  public setStoneType(stone: StoneType) {
    return stone;
  }

  @Action({ commit: 'SET_MOUNTING_TYPE' })
  public setMountingType(mount: MountingType) {
    return mount;
  }

  @Action({ commit: 'SET_REPORT_TYPE' })
  public setReportType(report: ReportType) {
    return report;
  }
}
