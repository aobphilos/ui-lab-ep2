import { PickupType } from '../enum/enums';

export class ReturnInstruction {
  constructor(
    public pickupType: PickupType = PickupType.IN_PERSON,
    public instruction: string = '',
  ) {}
}
