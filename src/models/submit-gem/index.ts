import { StonePhoto } from './StonePhoto';

export enum StoneType {
  DIAMOND,
  COLORED_STONE,
  UNKNOWN,
}

export enum MountingType {
  LOOSE,
  MOUNTED,
}

export class SubmitGemModel {
  constructor(
    public stoneType: StoneType = StoneType.DIAMOND,
    public stoneCount: number = 0,
    public mountingType: MountingType = MountingType.LOOSE,
    public stonePhotos: StonePhoto[] = [],
  ) {}
}
