import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../services/data-storage-service.service';
import {BackendService} from '../services/backend.service';
import {CheckStatusInfo} from '../models/CheckStatusInfo';
import {DialogFormComponent} from '../dialog-form/dialog-form';
import {MatDialog} from '@angular/material';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {LeasingModel} from '../models/LeasingModel';

@Component({
  selector: 'app-check-leasing-status',
  templateUrl: './check-leasing-status.component.html',
  styleUrls: ['./check-leasing-status.component.css']
})
export class CheckLeasingStatusComponent implements OnInit {

  formLabels: String[];
  leasingFormLabels = new LeasingFormLabels();
  checkStatusForm: FormGroup;
  checkStatusInfo: CheckStatusInfo;
  availableCustomerTypes = ['Private', 'Business'];

  constructor(private formBuilder: FormBuilder,
              private dataService: DataStorageService,
              private backend: BackendService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.formLabels = ['Check leasing status', 'Leasing form id number'];
    this.createValidForm();
  }

  createValidForm() {
    this.checkStatusForm = this.formBuilder.group({
      customerType: ['', [Validators.required]],
      id: ['', [Validators.minLength(24), Validators.maxLength(24)]]
    });
  }

  setCheckingInfo() {
    this.checkStatusInfo = this.checkStatusForm.value;
  }

  submitSearch() {
    if (!this.checkStatusForm.valid) {
      Object.keys(this.checkStatusForm.controls).forEach(field => {
        const control = this.checkStatusForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {

      if (this.checkStatusInfo.customerType === 'Private') {
        this.submitPrivateSearch();
      } else if (this.checkStatusInfo.customerType === 'Business') {
        this.submitBusinessSearch();
      }
    }
  }

  submitPrivateSearch() {
    this.backend.getPrivateFormById(this.checkStatusInfo).then(
      receivedData => {
        const received: any = receivedData;

        this.dialog.open(DialogFormComponent, {
          data: {
            leasingModel: DataStorageService.refactorCustomerType(received.customerLeasing),
            privateInfo: received.privateCustomer,
            checkingLeasingStatus: true,
            leasingStatus: received.status
          }
        });
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }

  submitBusinessSearch() {
    this.backend.getBusinessFormById(this.checkStatusInfo).then(
      receivedData => {
        const received: any = receivedData;

        this.dialog.open(DialogFormComponent, {
          data: {
            leasingModel: DataStorageService.refactorCustomerType(received.customerLeasing),
            businessInfo: received.businessCustomer,
            checkingLeasingStatus: true,
            leasingStatus: received.status
          }
        });
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }

}
