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

  ngOnInit() {
    if (this.dataService.getLeasingModel().customerType === 'Private') {
      this.formLabels = this.privateLabels;
      this.privateCustomerInfo = new PrivateCustomerInfo();
    } else {
      this.formLabels = this.businessLabels;
      this.businessCustomerInfo = new BusinessCustomerInfo();
      document.getElementById('test').hidden = true;
    }
  }

  submitForm() {
    console.log('First name: ' + this.privateCustomerInfo.name);
    console.log('Last name: ' + this.privateCustomerInfo.lastName);
    console.log('Personal Code: ' + this.privateCustomerInfo.code);
    console.log('Personal email: ' + this.privateCustomerInfo.email);
    console.log('Phone number: ' + this.privateCustomerInfo.phoneNumber);
    console.log('Address: ' + this.privateCustomerInfo.address);

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
    this.privateCustomerInfo = this.infoForm.value;
    this.dataService.setPrivateCustomerInfo(this.privateCustomerInfo);
  }
}
