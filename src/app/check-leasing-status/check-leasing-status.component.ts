import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../services/data-storage-service.service';
import {BackendService} from '../services/backend.service';
import {CheckStatusInfo} from '../models/CheckStatusInfo';
import {LeasingModel} from '../models/LeasingModel';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';

@Component({
  selector: 'app-check-leasing-status',
  templateUrl: './check-leasing-status.component.html',
  styleUrls: ['./check-leasing-status.component.css']
})
export class CheckLeasingStatusComponent implements OnInit {

  formLabels: String[];
  checkStatusForm: FormGroup;
  checkStatusInfo: CheckStatusInfo;

  returnedForm: {
    customerLeasingForm: LeasingModel;
    privateCustomerForm: PrivateCustomerInfo;
  };

  constructor(private formBuilder: FormBuilder,
              private dataService: DataStorageService,
              private backend: BackendService) {
  }

  ngOnInit() {
    this.formLabels = ['Check leasing status', 'Leasing form id number'];
    this.createValidForm();
  }

  createValidForm() {
    this.checkStatusForm = this.formBuilder.group({
      idNumber: ['', [Validators.minLength(5), Validators.maxLength(6)]]
    });
  }

  submitSearch() {
    if (this.checkStatusInfo.customerType === 'Private') {
      this.submitPrivateSearch();
    } else {
      this.submitBusinessSearch();
    }
  }

  // submitPrivateSearch() {
  //   this.backend.getPrivateFormById(this.checkStatusInfo).then(
  //     function (returnedForm: {
  //       customerLeasingForm: LeasingModel;
  //       privateCustomerForm: PrivateCustomerInfo; }) {
  //
  //     // this.dataService.setLeasingModel(returnedForm.customerLeasingForm);
  //   });
  // }

  submitPrivateSearch() {
    this.backend.getPrivateFormById(this.checkStatusInfo).then(
      data => {
        console.log(data);
        this.dataService.setLeasingModel(data.customerLeasingForm);
        this.dataService.setPrivateInfo(data.privateCustomerForm);
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }

  submitBusinessSearch() {
    // this.backend.getPrivateFormById(this.checkStatusInfo).then(
    //   _returnedForm => {
    //     this.returnedForm = _returnedForm;
    //     this.dataService.setLeasingModel(this.returnedForm.customerLeasingForm);
    //   });
  }

  setCheckingInfo() {
    this.checkStatusInfo = this.checkStatusForm.value;
  }

}
