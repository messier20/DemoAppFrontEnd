import {LeaseInfoOfPrivate} from "./LeaseInfoOfPrivate";
import {LeaseInfoOfBusiness} from "./LeaseInfoOfBusiness";
import {LeasingModel} from "./LeasingModel";
import {PrivateCustomerInfo} from "./PrivateCustomerInfo";
import {BusinessCustomerInfo} from "./BusinessCustomerInfo";

export class LeasesPrivateAndBusiness{
  // privateCustomer: LeaseInfoOfPrivate;
  // businessCustomer: LeaseInfoOfBusiness;
  leasingModel: LeasingModel;
  privateCustomerInfo: PrivateCustomerInfo;
  businessCustomerInfo: BusinessCustomerInfo;

  status: string;
  id: string;
  date: string;


  // businessCustomerInfo: BusinessCustomerInfo;



  constructor(leasesPrivateAndBusiness?){
    if (leasesPrivateAndBusiness){
      // this.privateCustomer.leasingModel = leasesPrivateAndBusiness.leasing;
      // this.privateCustomer.id = leasesPrivateAndBusiness.idHex;
      // this.privateCustomer.status = leasesPrivateAndBusiness.status;
      // this.privateCustomer.date = leasesPrivateAndBusiness.id.date;
      // this.privateCustomer.privateCustomerInfo = leasesPrivateAndBusiness.customer;

      // this.businessCustomer.leasingModel = leasesPrivateAndBusiness.leasing;
      // this.businessCustomer.id = leasesPrivateAndBusiness.idHex;
      // this.businessCustomer.status = leasesPrivateAndBusiness.status;
      // this.businessCustomer.date = leasesPrivateAndBusiness.id.date;
      // this.businessCustomer.businessCustomerInfo = leasesPrivateAndBusiness.customer;


      // this.customerInfo.lastName = leasesPrivateAndBusiness.customer.lastName;

      // this.customerInfo = leasesPrivateAndBusiness.customer;
      this.leasingModel = leasesPrivateAndBusiness.leasing;
      this.status = leasesPrivateAndBusiness.status;
      this.id = leasesPrivateAndBusiness.idHex;
      this.date = leasesPrivateAndBusiness.id.date;

      // if(leasesPrivateAndBusiness.leasingModel.customerType === 'PRIVATE') {
        this.privateCustomerInfo = leasesPrivateAndBusiness.customer;
      // }
       this.businessCustomerInfo = leasesPrivateAndBusiness.customer;

    }
  }
}
