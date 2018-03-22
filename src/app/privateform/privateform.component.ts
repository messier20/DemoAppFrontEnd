import { Component, OnInit } from '@angular/core';
import { LeasingModel } from '../models/LeasingModel';
import {CarList} from '../models/CarList';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-privateform',
  templateUrl: './privateform.component.html',
  styleUrls: ['./privateform.component.css'],
  providers: [DataStorageService]
})
export class PrivateformComponent implements OnInit {


  leasingModel: LeasingModel;
  leasingForm: FormGroup;


  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  cars;
  model: String[];
  availableDays = [15, 30];

  numb;
  assetPrice;


  constructor(private dataService: DataStorageService, private formBuilder: FormBuilder) {
    this.cars = new CarList().cars;
    this.createValidForm();
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

    // this.leasingModel = new LeasingModel(this.leasingForm.value);
    this.dataService.setLeasingModel(this.leasingModel);
  }

  createValidForm() {
    this.leasingForm = this.formBuilder.group({
      assetPrice: ['', [Validators.required, Validators.min(2000)]],
      numb: [this.numb, [Validators.required, Validators.min(200)]]
    })
    // this.leasingModel.assetPrice = this.assetPrice;
  }

  createValidFormSetVars(){

  }


  check() {
    this.leasingModel.assetPrice = this.leasingForm.get('assetPrice').value;
    console.log("asset price in class", this.leasingModel.assetPrice);

    console.log("numb", this.leasingForm.value);
    console.log("assetPrice", this.leasingForm.get('assetPrice'));
  }

}
