import { Component, OnInit, Output, EventEmitter } from '@angular/core';


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
  advancePaymentPercentage;
  advancePaymentAmount;
  leasePeriodInMonths;
  margin;
  contractFee;
  paymentDate;


  constructor() { }

  @Output()
  newLeasingForm = new EventEmitter<Object>();

  ngOnInit() {
  }

  createLeasingForm() {

  }

}
