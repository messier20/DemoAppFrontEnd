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

  constructor(private router: Router,
              private dataService: DataStorageService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {
    this.createValidForm();
    this.leasingModel = this.dataService.getLeasingModel();
  }

  isCustomerPrivate() {
    return this.leasingModel.customerType === 'Private';
  }

  ngOnInit() {
    if (this.isCustomerPrivate()) {
      this.formLabels = new CustomerInfoLabels().privateInfoLabels;
      if (this.dataService.getPrivateInfo() != null) {
        this.infoForm.setValue(this.dataService.getPrivateInfo());
      }
      else if (this.infoForm.get('name') === null) {
        console.log("name", this.infoForm.get('name'));
        // this.infoForm.setValue(this.infoForm.get('name'));
        // }
        // else {
        this.privateCustomerInfo = new PrivateCustomerInfo();
      }
    } else {
      this.formLabels = new CustomerInfoLabels().businessInfoLabels;
      console.log("should create form labels");


      if (this.dataService.getBusinessInfo() != null) {
        console.log("data service not empty");
        this.infoForm.setValue(this.dataService.getBusinessInfo());
        document.getElementById('hiddenName').hidden = true;
        this.infoForm.get('lastName').disable();

      } else  {
        this.businessCustomerInfo = new BusinessCustomerInfo();
        document.getElementById('hiddenName').hidden = true;
        this.infoForm.get('lastName').disable();

        console.log("info form empty");
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
