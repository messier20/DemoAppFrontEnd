import {LeasingModel} from "./LeasingModel";
import {PrivateCustomerInfo} from "./PrivateCustomerInfo";

export class LeaseInfoOfPrivate {


  leasingModel: LeasingModel;
  privateCustomerInfo: PrivateCustomerInfo;
  status: string;
  id: string;
  date: string;

  constructor(leaseInfoOfPrivate?) {
    if(leaseInfoOfPrivate) {
      this.leasingModel = leaseInfoOfPrivate.customerLeasing;
      this.privateCustomerInfo = leaseInfoOfPrivate.privateCustomer;
      this.status = leaseInfoOfPrivate.status;
      this.id = leaseInfoOfPrivate.id.counter;
      this.date = leaseInfoOfPrivate.id.date;
    }
  }


}
