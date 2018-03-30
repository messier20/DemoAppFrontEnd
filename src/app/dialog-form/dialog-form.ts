import {Component, Inject} from '@angular/core';
import {BackendService} from '../services/backend.service';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {CustomerInfoLabels} from '../constants/CustomerInfoLabels';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.html',
  styleUrls: ['./dialog-form.css']
})
export class DialogFormComponent {

  privateCustomer: boolean;

  leasingModel: LeasingModel;
  privateCustomerInfo: PrivateCustomerInfo;
  businessCustomerInfo: BusinessCustomerInfo;
  checkingLeasingStatus: boolean;
  leasingStatus: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private backendService: BackendService) {

    this.leasingModel = this.data.leasingModel;
    this.checkingLeasingStatus = this.data.checkingLeasingStatus;
    this.leasingStatus = this.data.leasingStatus;
    this.isCustomerPrivate();

    if (this.privateCustomer) {
      this.privateCustomerInfo = this.data.privateInfo;
    } else {
      this.businessCustomerInfo = this.data.businessInfo;
    }
  }

  sendFormToBackend() {
    this.backendService.sendCompletedForm();
  }

  private isCustomerPrivate() {
    this.privateCustomer = this.leasingModel.customerType === 'Private';
  }
}
