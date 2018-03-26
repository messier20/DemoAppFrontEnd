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
      document.getElementById('hiddenName').hidden = true;
      this.infoForm.get('lastName').disable();
    }


  }

  submitForm() {
    this.dialog.open(DialogFormComponent);
  }

  private createValidForm() {
    this.infoForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      code: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^\\d+$')]],
      email: ['', [Validators.required, Validators.maxLength(65), Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('^\\d+$')]],
      address: ['', [Validators.required, Validators.maxLength(80)]],
      lastName: ['', [Validators.required, Validators.maxLength(40)]]
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
