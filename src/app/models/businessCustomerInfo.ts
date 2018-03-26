import {LeasingModel} from './LeasingModel';

export class BusinessCustomerInfo {

  customerType;
  name: string;
  code: number;
  email: string;
  phoneNumber: string;
  address: string;

  constructor(businessCustomerInfo?: BusinessCustomerInfo, leasingModel?: LeasingModel) {

    if (businessCustomerInfo) {
      this.customerType = leasingModel.customerType;
      this.name = businessCustomerInfo.name;
      this.code = businessCustomerInfo.code;
      this.email = businessCustomerInfo.email;
      this.phoneNumber = businessCustomerInfo.phoneNumber;
      this.address = businessCustomerInfo.address;
    } else {

    }
  }
}
