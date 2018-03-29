import {LeasingModel} from './LeasingModel';

export class BusinessCustomerInfo {
  name: string;
  code: number;
  email: string;
  phoneNumber: string;
  address: string;

  constructor(businessCustomerInfo?: BusinessCustomerInfo) {

    if (businessCustomerInfo) {
      this.name = businessCustomerInfo.name;
      this.code = businessCustomerInfo.code;
      this.email = businessCustomerInfo.email;
      this.phoneNumber = businessCustomerInfo.phoneNumber;
      this.address = businessCustomerInfo.address;
    } else {

    }
  }

}
