import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../services/data-storage-service.service';
import {BackendService} from '../services/backend.service';
import {CheckStatusInfo} from '../models/CheckStatusInfo';
import {DialogFormComponent} from '../dialog-form/dialog-form';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {InputFormsErrorStateMatcher} from "../utils/InputFormsErrorStateMatcher";
import {ValidationAmounts} from "../constants/ValidationAmounts";

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
  errorMatcher = new InputFormsErrorStateMatcher();
  noLeasingFound: boolean;
  availableCustomerTypes = ['Private', 'Business'];
  PRIVATE = 'PRIVATE';
  BUSINESS = 'BUSINESS';
  validationAmounts = ValidationAmounts;

  constructor(private formBuilder: FormBuilder,
              private dataService: DataStorageService,
              private backend: BackendService,
              private dialog: MatDialog,
              public snackBar: MatSnackBar) {

    this.dataService.deleteAllLeasingData();
  }

  ngOnInit() {
    this.noLeasingFound = false;
    this.formLabels = ['Check leasing status', 'Leasing form ID'];
    this.createValidForm();
  }

  createValidForm() {
    this.checkStatusForm = this.formBuilder.group({
      customerType: ['', [Validators.required]],
      id: ['', [Validators.required, Validators.minLength(24), Validators.maxLength(24)]]
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

      if (this.checkStatusInfo.customerType === 'PRIVATE') {
        this.submitPrivateSearch();
      } else if (this.checkStatusInfo.customerType === 'BUSINESS') {
        this.submitBusinessSearch();
      }
    }
  }

  submitPrivateSearch() {
    this.backend.getPrivateFormById(this.checkStatusInfo).then(
      receivedData => {
        const received: any = receivedData;

        if (received !== null) {
          this.noLeasingFound = false;
          this.dialog.open(DialogFormComponent, {
            data: {
              leasingModel: received.leasing,
              privateInfo: received.customer,
              checkingLeasingStatus: true,
              leasingStatus: received.status
            }
          });

        } else {
          this.noLeasingFound = true;
        }

      },
      error => {
        this.noLeasingFound = true;
        this.openSnackBar('No leasing with this ID found. Please check your customer type or ID', 'Close');
      }
    );
  }

  submitBusinessSearch() {
    this.backend.getBusinessFormById(this.checkStatusInfo).then(
      receivedData => {
        const received: any = receivedData;

        if (received !== null) {
          this.noLeasingFound = false;
          this.dialog.open(DialogFormComponent, {
            data: {
              leasingModel: received.leasing,
              businessInfo: received.customer,
              checkingLeasingStatus: true,
              leasingStatus: received.status
            }
          });

        } else {
          this.noLeasingFound = true;
        }

      },
      error => {
        this.noLeasingFound = true;
        console.log("err", error);
        this.openSnackBar('No leasing with this ID found. Please check your customer type or ID', 'Close');

      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

}
