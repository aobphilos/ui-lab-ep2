import { Address } from '..';

export class ReturnAddress extends Address {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    address: Address = new Address(),
  ) {
    super(
      address.address1,
      address.address2,
      address.city,
      address.state,
      address.country,
      address.zipCode,
    );
  }
}
