import {LeasingModel} from './LeasingModel';

export class BusinessCustomerInfo {

  customerType;
  name: string;
  code: number;
  email: string;
  phoneNumber: string;
  address: string;

  private businessCustomerInfoArray: string[];

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

  public toArray(): string[] {
    this.businessCustomerInfoArray[0] = this.name;
    this.businessCustomerInfoArray[2] = this.code.toString();
    this.businessCustomerInfoArray[3] = this.email;
    this.businessCustomerInfoArray[4] = this.phoneNumber;
    this.businessCustomerInfoArray[5] = this.address;

    return this.businessCustomerInfoArray;
  }
}
