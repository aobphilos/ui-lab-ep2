export enum StoneType {
  DIAMOND,
  COLORED_STONE,
  UNKNOWN,
}

export enum MountingType {
  LOOSE,
  MOUNTED,
}

export enum ReportType {
  PREMIUM_REPORT,
  REGULAR_REPORT,
  SMALL_REPORT,
  SEALING_CARD,
  SEALING_BOX,
}

export interface StonePhoto {
  path: string;
  description: string;
}

export class SubmitGemModel {
  constructor(
    public stoneType: StoneType = StoneType.DIAMOND,
    public stoneCount: number = 1,
    public mountingType: MountingType = MountingType.LOOSE,
    public stonePhotos: StonePhoto[] = [],
    public reportType: ReportType = ReportType.REGULAR_REPORT,
  ) {
    this.stoneType = stoneType;
    this.stoneCount = stoneCount;
    this.mountingType = mountingType;
    this.stonePhotos = stonePhotos;
    this.reportType = reportType;
  }
}
