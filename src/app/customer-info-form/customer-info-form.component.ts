import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {Router} from '@angular/router';
import {CustomerInfoLabels} from '../constants/CustomerInfoLabels';
import {DialogFormComponent} from '../dialog-form/dialog-form';
import {MatDialog} from '@angular/material';
import {LeasingModel} from '../models/LeasingModel';
import {CustomValidators} from '../constants/CustomValidators';
import {InputFormsErrorStateMatcher} from '../utils/InputFormsErrorStateMatcher';
import {ValidationAmounts} from '../constants/ValidationAmounts';

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
  leasingModel: LeasingModel;
  errorMatcher = new InputFormsErrorStateMatcher();
  validationAmounts = ValidationAmounts;

  constructor(private router: Router,
              private dataService: DataStorageService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {
    this.createValidForm();
    this.leasingModel = this.dataService.getLeasingModel();
  }

  isCustomerPrivate() {
    if (this.dataService.getLeasingModel() === null || this.dataService.getLeasingModel() === undefined) {
      return true;
    }
    return this.dataService.getLeasingModel().customerType === 'PRIVATE';
  }

  ngOnInit() {
    if (this.dataService.getLeasingModel() === null || this.dataService.getLeasingModel() === undefined) {
      document.getElementById('submitButton').hidden = true;
    }
    if (this.isCustomerPrivate()) {
      this.formLabels = new CustomerInfoLabels().privateInfoLabels;
      if (this.dataService.getPrivateInfo() != null) {
        this.infoForm.setValue(this.dataService.getPrivateInfo());
        this.infoForm.get('phoneNumber').setValue(this.infoForm.get('phoneNumber').value.substring(1));

      } else if (this.infoForm.get('name') === null) {
        this.privateCustomerInfo = new PrivateCustomerInfo();
      }
    } else {
      this.formLabels = new CustomerInfoLabels().businessInfoLabels;
      console.log('should create form labels');


      if (this.dataService.getBusinessInfo() != null) {
        console.log('data service not empty');
        this.infoForm.get('lastName').disable();

        this.infoForm.get('name').setValue(this.dataService.getBusinessInfo().name);
        this.infoForm.get('code').setValue(this.dataService.getBusinessInfo().code);
        this.infoForm.get('email').setValue(this.dataService.getBusinessInfo().email);
        this.infoForm.get('address').setValue(this.dataService.getBusinessInfo().address);
        this.infoForm.get('phoneNumber').setValue(this.infoForm.get('phoneNumber').value.substring(1));        // this.infoForm.setValue(this.dataService.getBusinessInfo());

        console.log('info form', this.infoForm);

      } else {
        this.businessCustomerInfo = new BusinessCustomerInfo();
        this.infoForm.get('lastName').disable();

        console.log('info form empty');
      }
    }

  }

  submitForm() {
    if (!this.infoForm.valid) {
      Object.keys(this.infoForm.controls).forEach(field => {
        const control = this.infoForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.dialog.open(DialogFormComponent, {
        data: {
          leasingModel: this.dataService.getLeasingModel(),
          privateInfo: this.privateCustomerInfo,
          businessInfo: this.businessCustomerInfo,
          checkingLeasingStatus: false
        }
      });
    }
  }

  goBack() {
    this.setCustomerInfo();
    this.router.navigate(['/privateForm']);
  }

  private createValidForm() {
    this.infoForm = this.formBuilder.group({
      name: ['', CustomValidators.nameValidator],
      code: ['', CustomValidators.codeValidator],
      email: ['', CustomValidators.emailValidator],
      phoneNumber: ['', CustomValidators.phoneNumberValidator],
      address: ['', CustomValidators.addressValidator],
      lastName: ['', CustomValidators.lastNameValidator]
    });
  }

  setCustomerInfo() {
    if (this.isCustomerPrivate()) {
      this.privateCustomerInfo = this.infoForm.value;
      if (!this.privateCustomerInfo.phoneNumber.startsWith('+')) {
        this.privateCustomerInfo.phoneNumber = '+' + this.privateCustomerInfo.phoneNumber;
      }
      this.dataService.setPrivateInfo(this.privateCustomerInfo);
    } else {
      this.businessCustomerInfo = this.infoForm.value;
      if (!this.businessCustomerInfo.phoneNumber.startsWith('+')) {
        this.businessCustomerInfo.phoneNumber = '+' + this.businessCustomerInfo.phoneNumber;
      }
      this.dataService.setBusinessInfo(this.businessCustomerInfo);
    }
  }

  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
