import {LeasingModel} from "./LeasingModel";
import {PrivateCustomerInfo} from "./PrivateCustomerInfo";

export class LeaseInfoOfPrivate {


  leasingModel: LeasingModel;
  privateCustomerInfo: PrivateCustomerInfo;
  status: string;
  id: string;
  // idHex: string;
  date: string;

  constructor(leaseInfoOfPrivate?) {
    if(leaseInfoOfPrivate) {
      this.leasingModel = leaseInfoOfPrivate.leasing;
      this.privateCustomerInfo = leaseInfoOfPrivate.customer;
      this.status = leaseInfoOfPrivate.status;
      this.id = leaseInfoOfPrivate.idHex;
      this.date = leaseInfoOfPrivate.id.date;
    }
  }


}
