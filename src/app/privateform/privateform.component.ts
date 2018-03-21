import { Component, OnInit } from '@angular/core';
import { LeasingModel } from '../models/LeasingModel';
import {CarList} from '../models/CarList';


@Component({
  selector: 'app-privateform',
  templateUrl: './privateform.component.html',
  styleUrls: ['./privateform.component.css']
})
export class PrivateformComponent implements OnInit {


  leasingModel: LeasingModel;


  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  cars;
  model: String[];
  availableDays = [15, 30];


  constructor() {
    this.cars = new CarList().cars;
  }

  ngOnInit() {
    this.leasingModel = new LeasingModel();
  }

  selectBrandHandler() {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].make === this.leasingModel.carBrand) {
        this.model = this.cars[i].model;
        break;
      }
    }
  }

  calcContractFee() {
    this.leasingModel.contractFee = (this.leasingModel.assetPrice * 0.01).toFixed(2);
    if (Number.parseFloat(this.leasingModel.contractFee)< 200) {
      this.leasingModel.contractFee = (200).toFixed(2);
    }
  }

  calcAdvancePaymentAmount() {
    this.leasingModel.advancePaymentAmount = (this.leasingModel.assetPrice * this.leasingModel.advancePaymentPercentage / 100).toFixed(2);
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
