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
  ReportType,
} from '@/models/submit-gem';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
// import { get } from 'axios';

@Module({ namespaced: true, dynamic: true, store, name: 'submitGem' })
export default class SubmitGem extends VuexModule {
  private model: SubmitGemModel;

  public get modelToDb() {
    return { ...this.model };
  }
  public get jsonSummary() {
    return JSON.stringify(this.model);
  }

  public get refId() {
    return this.model.refId;
  }

  public get stonePhotos() {
    return this.model.stonePhotos;
  }

  public get stoneCount() {
    return this.model.stoneCount;
  }

  public get stoneType() {
    return this.model.stoneType;
  }
  public get stoneTypeText() {
    let typeText = 'None';
    switch (this.model.stoneType) {
      case StoneType.DIAMOND:
        typeText = 'Diamond';
        break;
      case StoneType.COLORED_STONE:
        typeText = 'Colored Stone';
        break;
      case StoneType.UNKNOWN:
        typeText = 'Unknow';
        break;
    }
    return typeText;
  }

  public get mountingType() {
    return this.model.mountingType;
  }

  public get mountingTypeText() {
    let typeText = 'None';
    switch (this.model.mountingType) {
      case MountingType.LOOSE:
        typeText = 'Loose';
        break;
      case MountingType.MOUNTED:
        typeText = 'Mounted';
        break;
    }
    return typeText;
  }

  public get report() {
    return this.model.report;
  }
  public get reportTypeText() {
    let typeText = 'None';
    switch (this.model.report.reportType) {
      case ReportType.PREMIUM_REPORT:
        typeText = 'Premium Report';
        break;
      case ReportType.REGULAR_REPORT:
        typeText = 'Regular Report';
        break;
      case ReportType.SMALL_REPORT:
        typeText = 'Small Report';
        break;
      case ReportType.SEALING_CARD:
        typeText = 'Sealing Card';
        break;
      case ReportType.SEALING_BOX:
        typeText = 'Sealing Box';
        break;
    }
    return typeText;
  }

  public get isIncludeSealingCard() {
    return this.model.report.isIncludeSealingCard;
  }

  public get isIncludeOriginalReport() {
    return this.model.report.isIncludeOriginalReport;
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

    const count = payload.stoneCount;
    if (count > this.model.stonePhotos.length) {
      for (let index = this.model.stonePhotos.length; index < count; index++) {
        this.model.stonePhotos.push(new StonePhoto());
      }
    } else if (count < this.model.stonePhotos.length) {
      this.model.stonePhotos.splice(count);
    }
  }

  @Mutation
  public SET_STEP_2(payload: any) {
    this.model.mountingType = payload.mountingType;
    this.model.stonePhotos = [...payload.stonePhotos];
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
  public reset() {
    return new SubmitGemModel();
  }

  @Action({ commit: 'SET_STEP_1' })
  public setStep1(payload: any) {
    return payload;
  }

  @Action({ commit: 'SET_STEP_2' })
  public setStep2(payload: any) {
    return payload;
  }

  @Action({ commit: 'SET_STEP_3' })
  public setStep3(payload: any) {
    return payload;
  }
}
