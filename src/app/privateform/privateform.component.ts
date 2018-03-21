import { Component, OnInit } from '@angular/core';
import { LeasingModel } from '../models/LeasingModel';

@Component({
  selector: 'app-privateform',
  templateUrl: './privateform.component.html',
  styleUrls: ['./privateform.component.css']
})
export class PrivateformComponent implements OnInit {

  leasingModel: LeasingModel;

  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  availableDays = [15, 30];

  constructor() { }

  ngOnInit() {
    this.leasingModel = new LeasingModel();
  }

  submitForm() {
    console.log('Customer type: ' + this.leasingModel.customerType);
    console.log('Asset type: ' + this.leasingModel.assetType);
    console.log('Engine power: ' + this.leasingModel.enginePower);
    console.log('Asset price: ' + this.leasingModel.assetPrice);
    console.log('Advance payment percentage: ' + this.leasingModel.advancePaymentPercentage);
    console.log('Lease period in months: ' + this.leasingModel.leasePeriodInMonths);
    console.log('Margin: ' + this.leasingModel.margin);
    console.log('Payment date: ' + this.leasingModel.paymentDate);
  }

}
