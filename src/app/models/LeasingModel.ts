import {FormGroup} from '@angular/forms';

export class LeasingModel {

  customerType: string;
  assetType: string;
  carBrand: string;
  carModel: string;
  manufacturedDate: string;
  enginePower: number;
  assetPrice: number;
  advancePaymentPercentage: number;
  advancePaymentAmount: string;
  leasePeriodInMonths: number;
  margin: number;
  contractFee: string;
  paymentDate: number;

  // heroForm = new FormGroup({
  //
  // })
  // constructor(customerType, assetType) {
  //   this.customerType = customerType;
  //   this.assetType = assetType;
  // }


}
