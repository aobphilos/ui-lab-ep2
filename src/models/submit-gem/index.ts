import { StoneType, MountingType, ReportType, PickupType } from './enum/enums';
export { StoneType, MountingType, ReportType, PickupType };

import { Address } from './class/address';
import { Contact } from './class/contact';
import { ReturnAddress } from './class/return-address';
import { ReturnInstruction } from './class/return-instruction';
import { StonePhoto } from './class/stone-photo';
import { Report } from './class/report';
export { Address, Contact, ReturnAddress, ReturnInstruction, StonePhoto, Report };

import { v4 as uuid } from 'uuid';

export class SubmitGemModel {
  constructor(
    public refId: string = uuid(),
    public stoneType: StoneType = StoneType.DIAMOND,
    public stoneCount: number = 1,
    public mountingType: MountingType = MountingType.LOOSE,
    public stonePhotos: StonePhoto[] = [],
    public report: Report = new Report(),
    public contact: Contact = new Contact(),
    public address: Address = new Address(),
    public returnAddress: ReturnAddress = new ReturnAddress(),
    public returnInstruction: ReturnInstruction = new ReturnInstruction(),
  ) {
    this.stoneType = stoneType;
    this.stoneCount = stoneCount;
    this.mountingType = mountingType;
    this.stonePhotos = stonePhotos;
    this.report = report;
    this.contact = contact;
    this.address = address;
    this.returnAddress = returnAddress;
    this.returnInstruction = returnInstruction;
  }
}
