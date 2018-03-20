import { Component, OnInit } from '@angular/core';
import {type} from 'os';

@Component({
  selector: 'app-privateform',
  templateUrl: './privateform.component.html',
  styleUrls: ['./privateform.component.css']
})
export class PrivateformComponent implements OnInit {
  availableCustomerTypes = ['Private', 'Business'];
  customerType;
  availableAssetTypes = ['Vehicle'];
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


  submitted = false;

  onSubmit() { this.submitted = true; }
  formSubmitted(){
    console.log(this.customerType);
    console.log(this.assetType);
    console.log(this.carModel);
  }

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

  availableDays = [1, 30];

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log('Engine power: ' + this.enginePower);
    console.log('Asset price: ' + this.assetPrice);
    console.log('Advance payment percentage: ' + this.advancePaymentPercentage);
    console.log('Lease period in months: ' + this.leasePeriodInMonths);
    console.log('Margin: ' + this.margin);
    console.log('Payment date: ' + this.paymentDate);
  }

}
