import {
  SubmitGemModel,
  StoneType,
  MountingType,
  StonePhoto,
  Contact,
  Address,
  ReturnAddress,
  ReturnInstruction,
  Report,
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

  public get report() {
    return this.model.report;
  }

  public get contact() {
    return this.model.contact;
  }

  public get address() {
    return this.model.address;
  }

  public get returnAddress() {
    return this.model.returnAddress;
  }

  public get returnInstruction() {
    return this.model.returnInstruction;
  }

  @Mutation
  public RESET_MODEL(model: SubmitGemModel) {
    this.model = model;
  }

  @Mutation
  public SET_STEP_1(payload: any) {
    this.model.stoneType = payload.stoneType;
    this.model.stoneCount = payload.stoneCount;
  }

  @Mutation
  public SET_STEP_2(payload: any) {
    this.model.mountingType = payload.mountingType;
    this.model.stonePhotos = payload.stonePhotos;
    this.model.report = payload.report;
  }

  @Mutation
  public SET_STEP_3(payload: any) {
    this.model.contact = payload.contact;
    this.model.address = payload.address;
    this.model.returnAddress = payload.returnAddress;
    this.model.returnInstruction = payload.returnInstruction;
  }

  @Action({ commit: 'RESET_MODEL' })
  public async reset() {
    return new SubmitGemModel();
  }

  @Action({ commit: 'SET_STEP_1' })
  public setStep1(stone: StoneType, count: number) {
    return { stoneType: stone, stoneCount: count };
  }

  @Action({ commit: 'SET_STEP_2' })
  public setStep2(
    mount: MountingType,
    photos: StonePhoto[],
    report: Report,
  ) {
    return { mountingType: mount, stonePhotos: photos, report };
  }

  @Action({ commit: 'SET_STEP_3' })
  public setStep3(
    contact: Contact,
    address: Address,
    returnAddress: ReturnAddress,
    returnInstruction: ReturnInstruction,
  ) {
    return { contact, address, returnAddress, returnInstruction };
  }
}
