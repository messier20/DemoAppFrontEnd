import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';

@Component({
  selector: 'app-customer-info-form',
  templateUrl: './customer-info-form.component.html',
  styleUrls: ['./customer-info-form.component.css']
})
export class CustomerInfoFormComponent implements OnInit {
  privateLabels = ['First Name', 'Personal Code', 'Email', 'Phone no.', 'Address', 'Last Name'];
  businessLabels = ['Company Name', 'Company Code', 'Email', 'Phone no.', 'Address', 'Empty'];
  formLabels: String[];
  infoForm: FormGroup;
  businessCustomerInfo: BusinessCustomerInfo;
  privateCustomerInfo: PrivateCustomerInfo;

  constructor(private dataService: DataStorageService, private formBuilder: FormBuilder) {
    this.createValidForm();
  }

  private isCustomerPrivate() {
    return this.dataService.getLeasingModel().customerType === 'Private';
  }

  ngOnInit() {
    if (this.isCustomerPrivate()) {
      this.formLabels = this.privateLabels;
      this.privateCustomerInfo = new PrivateCustomerInfo();
    } else {
      this.formLabels = this.businessLabels;
      this.businessCustomerInfo = new BusinessCustomerInfo();
      document.getElementById('test').hidden = true;
      this.infoForm.get('lastName').disable();
    }
  }

  submitForm() {
    if (this.isCustomerPrivate()) {
      console.log('First name: ' + this.privateCustomerInfo.name);
      console.log('Last name: ' + this.privateCustomerInfo.lastName);
      console.log('Personal Code: ' + this.privateCustomerInfo.code);
      console.log('Personal email: ' + this.privateCustomerInfo.email);
      console.log('Phone number: ' + this.privateCustomerInfo.phoneNumber);
      console.log('Address: ' + this.privateCustomerInfo.address);
    } else {
      console.log('First name: ' + this.businessCustomerInfo.name);
      console.log('Personal Code: ' + this.businessCustomerInfo.code);
      console.log('Personal email: ' + this.businessCustomerInfo.email);
      console.log('Phone number: ' + this.businessCustomerInfo.phoneNumber);
      console.log('Address: ' + this.businessCustomerInfo.address);
      console.log(this.infoForm);
    }
  }

  private createValidForm() {
    this.infoForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
  }

  setCustomerInfo() {
    if (this.isCustomerPrivate()) {
      this.privateCustomerInfo = this.infoForm.value;
      this.dataService.setPrivateCustomerInfo(this.privateCustomerInfo);
    } else {
      this.businessCustomerInfo = this.infoForm.value;
      this.dataService.setBusinessCustomerInfo(this.businessCustomerInfo);
    }
  }
}
