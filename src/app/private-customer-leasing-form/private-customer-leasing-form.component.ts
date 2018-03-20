import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LeasingModel} from "../models/LeasingModel";
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'
// import {FormBuilder, Validators} from "@angular/forms";
import { FormControl, FormBuilder, Validators } from '@angular/forms';
// import {Services} from "@angular/core/src/view";
// import {Services} from "@angular/core/src/view";
// import {Services} from "../services";
// import {Services} from '@angular/core/src/view';
// import {ServicesService} from "../services/services.service"


@Component({
  selector: 'app-private-customer-leasing-form',
  templateUrl: './private-customer-leasing-form.component.html',
  styleUrls: ['./private-customer-leasing-form.component.css']
})
export class PrivateCustomerLeasingFormComponent implements OnInit {

  customerType;
  assetType;
  carBrand;
  carModel;
  manufacturedDate;
  enginePower;
  assetPrice;
  // validatedAssetPrice = function () {
  //
  // };
  advancePaymentPercentage;
  advancePaymentAmount;
  leasePeriodInMonths;
  margin;
  contractFee;
  paymentDate;
  userGroup;

  LeasingModel : LeasingModel;



  constructor(private formBuilder : FormBuilder) {

  }

  // constructor(private services : ServicesService) { }

  @Output()
  newLeasingForm = new EventEmitter<Object>();

  ngOnInit() {
    this.LeasingModel = new LeasingModel();
    this.userGroup = this.formBuilder.group({
      assetPrice: ['', Validators.min(15)],
    })
  }



  createLeasingForm() {



    // this.createLeasingForm()(this.customerType)
    //   .then(data => {
    //     console.log('createPost callback');
    //     this.newLeasingForm.emit(data);
    //   });

    this.customerType = this.customerType;
    console.log(this.customerType);



  }


  validateAssetPrice() {
     let validation = true;
    this.assetPrice = this.assetPrice;
    console.log(this.assetPrice);
    if(this.assetPrice < 10000) {
      // this.validatedAssetPrice = false;
    }
    // return validation;

  }

}
