import { Component, OnInit } from '@angular/core';
import {CarList} from '../models/CarList';

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
  assetPrice:number;
  advancePaymentPercentage:number;
  advancePaymentAmount:number;
  leasePeriodInMonths;
  margin;
  contractFee:number;
  paymentDate;

  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  cars;
  model: String[];
  availableDays = [15, 30];

  constructor() {
    this.cars = new CarList().cars;
   }

  ngOnInit() {
  }
  
  selectBrandHandler( event: any){
    for (let i = 0; i < this.cars.length; i++) {
      if(this.cars[i].make === this.carBrand){
        this.model = this.cars[i].model;
        // document.getElementById("carModel").hidden = false;
        break;
      }
    }
  }
  
  calcContractFee(event:any){
    this.contractFee = this.assetPrice*0.01;
    if(this.contractFee<200){
      this.contractFee = 200;
    }
  }

  calcAdvancePaymentAmount(event:any){
      this.advancePaymentAmount = this.assetPrice*this.advancePaymentPercentage/100;
  }

  submitForm() {
    console.log('Customer type: ' + this.customerType);
    console.log('Asset type: ' + this.assetType);
    console.log('Car make: ' + this.carBrand);
    console.log('Car model: ' + this.carModel);
    console.log('Engine power: ' + this.enginePower);
    console.log('Asset price: ' + this.assetPrice);
    console.log('Advance payment percentage: ' + this.advancePaymentPercentage);
    console.log('Lease period in months: ' + this.leasePeriodInMonths);
    console.log('Margin: ' + this.margin);
    console.log('Payment date: ' + this.paymentDate);
  }

}
