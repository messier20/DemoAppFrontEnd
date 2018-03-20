import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privateform',
  templateUrl: './privateform.component.html',
  styleUrls: ['./privateform.component.css']
})
export class PrivateformComponent implements OnInit {
  customerType;
  assetType;
  carBrand;
  carModel;
  manufacturedDate;

  enginePower;
  assetPrice;
  advancePaymentPercentage;
  advancePaymentAmount;
  leasePeriodInMonths;
  margin;
  contractFee;
  paymentDate;

  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  availableDays = [15, 30];

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log('Customer type: ' + this.customerType);
    console.log('Asset type' + this.assetType);
    console.log('Engine power: ' + this.enginePower);
    console.log('Asset price: ' + this.assetPrice);
    console.log('Advance payment percentage: ' + this.advancePaymentPercentage);
    console.log('Lease period in months: ' + this.leasePeriodInMonths);
    console.log('Margin: ' + this.margin);
    console.log('Payment date: ' + this.paymentDate);
  }

}
