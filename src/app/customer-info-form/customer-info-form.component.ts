import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';
import {Router} from '@angular/router';
import {TextLabels} from '../models/TextLabels';
import {DialogFormComponent} from '../dialog-form/dialog-form';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-customer-info-form',
  templateUrl: './customer-info-form.component.html',
  styleUrls: ['./customer-info-form.component.css']
})
export class CustomerInfoFormComponent implements OnInit {
  formLabels: String[];
  infoForm: FormGroup;
  businessCustomerInfo: BusinessCustomerInfo;
  privateCustomerInfo: PrivateCustomerInfo;

  constructor(private router: Router,
              private dataService: DataStorageService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {
    this.createValidForm();
  }

  private isCustomerPrivate() {
    return this.dataService.getLeasingModel().customerType === 'Private';
  }

  ngOnInit() {
    if (this.isCustomerPrivate()) {
      this.formLabels = new TextLabels().privateInfoLabels;
      this.privateCustomerInfo = new PrivateCustomerInfo();
    } else {
      this.formLabels = new TextLabels().businessInfoLabels;
      this.businessCustomerInfo = new BusinessCustomerInfo();
      document.getElementById('test').hidden = true;
      this.infoForm.get('lastName').disable();
    }


  }

  submitForm() {
    //   if (this.isCustomerPrivate()) {
    //     console.log('First name: ' + this.privateCustomerInfo.name);
    //     console.log('Last name: ' + this.privateCustomerInfo.lastName);
    //     console.log('Personal Code: ' + this.privateCustomerInfo.code);
    //     console.log('Personal email: ' + this.privateCustomerInfo.email);
    //     console.log('Phone number: ' + this.privateCustomerInfo.phoneNumber);
    //     console.log('Address: ' + this.privateCustomerInfo.address);
    //   } else {
    //     console.log('First name: ' + this.businessCustomerInfo.name);
    //     console.log('Personal Code: ' + this.businessCustomerInfo.code);
    //     console.log('Personal email: ' + this.businessCustomerInfo.email);
    //     console.log('Phone number: ' + this.businessCustomerInfo.phoneNumber);
    //     console.log('Address: ' + this.businessCustomerInfo.address);
    //     console.log(this.infoForm);
    // this.router.navigate(['/displayForm']);
    // }
    this.dialog.open(DialogFormComponent);

  }

  private createValidForm() {
    this.infoForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      code: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^\\d+$')]],
      email: ['', [Validators.required, Validators.maxLength(65), Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^\\d+$')]],
      address: ['', [Validators.required, Validators.maxLength(80)]],
      lastName: ['', [Validators.required, Validators.maxLength(40)]]
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
