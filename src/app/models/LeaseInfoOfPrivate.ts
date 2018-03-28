import {LeasingModel} from "./LeasingModel";
import {PrivateCustomerInfo} from "./PrivateCustomerInfo";

export class LeaseInfoOfPrivate {


  leasingModel: LeasingModel;
  privateCustomerInfo: PrivateCustomerInfo;
  status: string;

  constructor(leaseInfoOfPrivate?: LeaseInfoOfPrivate) {
    if(leaseInfoOfPrivate) {
      this.leasingModel = leaseInfoOfPrivate.leasingModel;
      this.privateCustomerInfo = leaseInfoOfPrivate.privateCustomerInfo;
      this.status = leaseInfoOfPrivate.status;
    }
  }


}
