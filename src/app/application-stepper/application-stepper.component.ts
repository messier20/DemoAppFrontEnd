import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';

@Component({
  selector: 'app-application-stepper',
  templateUrl: './application-stepper.component.html',
  styleUrls: ['./application-stepper.component.css']
})
export class ApplicationStepperComponent implements OnInit {

  stepOneComplete = false;
  leasingModel: LeasingModel;
  privateCustomerInfo: PrivateCustomerInfo;
  businessCustomerInfo: BusinessCustomerInfo;

  constructor(private dataService: DataStorageService) {
  }

  customerType;

  ngOnInit() {
  }

  toSecondStep() {
    this.stepOneComplete = true;
    this.customerType = this.dataService.getLeasingModel().customerType;
    document.getElementById('toSecondStep').click();
  }

  toThirdStep() {
    this.leasingModel = this.dataService.getLeasingModel();
    if (this.isCustomerPrivate()) {
      this.privateCustomerInfo = this.dataService.getPrivateInfo();
    } else {
      this.businessCustomerInfo = this.dataService.getBusinessInfo();
    }
    document.getElementById('toThirdStep').click();
  }

  backToFirstStep() {
    document.getElementById('toFirstStep').click();
    this.stepOneComplete = false;
  }

  private isCustomerPrivate() {
    return this.leasingModel.customerType === 'PRIVATE';
  }
}
