
import {LeasingModel} from './LeasingModel';
import {BusinessCustomerInfo} from './BusinessCustomerInfo';


export class LeaseInfoOfBusiness {


  leasingModel: LeasingModel;
  businessCustomerInfo: BusinessCustomerInfo;
  status: string;
  id: string;
  // idHex: string;
  date: string;

  constructor(leaseInfoOfBusiness?) {
    if(leaseInfoOfBusiness) {
      this.leasingModel = leaseInfoOfBusiness.leasing;
      this.businessCustomerInfo = leaseInfoOfBusiness.customer;
      this.status = leaseInfoOfBusiness.status;
      this.id = leaseInfoOfBusiness.idHex;
      this.date = leaseInfoOfBusiness.id.date;
    }
  }


}
