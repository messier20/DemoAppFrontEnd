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
  advancePaymentAmount: number;
  leasePeriodInMonths: number;
  margin: number;
  contractFee: number;
  paymentDate: number;

  // heroForm = new FormGroup({
  //
  // })
  // constructor(customerType, assetType) {
  //   this.customerType = customerType;
  //   this.assetType = assetType;
  // }


}
