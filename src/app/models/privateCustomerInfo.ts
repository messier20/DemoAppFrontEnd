import {BusinessCustomerInfo} from './businessCustomerInfo';

export class PrivateCustomerInfo extends BusinessCustomerInfo {

  lastName: string;

  private privateCustomerInfoArray;

  constructor(businessCustomerInfo?: BusinessCustomerInfo, privateCustomerInfo?: PrivateCustomerInfo) {
    if (privateCustomerInfo) {
      super(businessCustomerInfo);
      this.lastName = privateCustomerInfo.lastName;
    }

  }


  toArray(): string[] {
    this.privateCustomerInfoArray = super.toArray();
    this.privateCustomerInfoArray[1] = this.lastName;

    return this.privateCustomerInfoArray;
  }
}
