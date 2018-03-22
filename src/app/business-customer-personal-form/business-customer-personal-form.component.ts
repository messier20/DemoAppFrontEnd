import {Component, OnInit} from '@angular/core';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';

@Component({
  selector: 'app-business-customer-personal-form',
  templateUrl: './business-customer-personal-form.component.html',
  styleUrls: ['./business-customer-personal-form.component.css']
})
export class BusinessCustomerPersonalFormComponent implements OnInit {

  businessCustomerInfo: BusinessCustomerInfo;

  constructor() {
  }


  ngOnInit() {
    this.businessCustomerInfo = new BusinessCustomerInfo();
  }

  submitForm() {
    console.log('Company name: ' + this.businessCustomerInfo.companyName);
    console.log('Company code: ' + this.businessCustomerInfo.companyCode);
    console.log('Company email: ' + this.businessCustomerInfo.companyEmail);
    console.log('Phone number: ' + this.businessCustomerInfo.phoneNumber);
    console.log('Address: ' + this.businessCustomerInfo.address);
  }

}
