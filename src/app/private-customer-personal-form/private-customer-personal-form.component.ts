import {Component, OnInit} from '@angular/core';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';

@Component({
  selector: 'app-private-customer-personal-form',
  templateUrl: './private-customer-personal-form.component.html',
  styleUrls: ['./private-customer-personal-form.component.css']
})
export class PrivateCustomerPersonalFormComponent implements OnInit {

  privateCustomerInfo: PrivateCustomerInfo;
  constructor() {
  }

  ngOnInit() {
    this.privateCustomerInfo = new PrivateCustomerInfo();
  }
  submitForm() {
    console.log('First name: ' + this.privateCustomerInfo.firstName);
    console.log('Last name: ' + this.privateCustomerInfo.lastName);
    console.log('Personal Code: ' + this.privateCustomerInfo.personalCode);
    console.log('Personal email: ' + this.privateCustomerInfo.personalEmail);
    console.log('Phone number: ' + this.privateCustomerInfo.phoneNumber);
    console.log('Address: ' + this.privateCustomerInfo.address);

  }

}
