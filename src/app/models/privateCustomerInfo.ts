
import {BusinessCustomerInfo} from "./businessCustomerInfo";

export class PrivateCustomerInfo extends BusinessCustomerInfo{

  lastName: string;

  constructor( businessCustomerInfo?: BusinessCustomerInfo, privateCustomerInfo?: PrivateCustomerInfo) {
    if(privateCustomerInfo) {
      super(businessCustomerInfo);
      this.lastName = privateCustomerInfo.lastName;
    }

  }
}
