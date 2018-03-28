import {Component} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {BackendService} from '../services/backend.service';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';
import {TextLabels} from '../models/TextLabels';
import {LeasingFormLabels} from '../models/LeasingFormLabels';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.html',
  styleUrls: ['./dialog-form.css']
})
export class DialogFormComponent {

  privateCustomer: boolean;
  checkLeasingStatus: boolean;
  leasingStatus: string;

  leasingModel: LeasingModel;
  leasingLabels;

  privateCustomerInfo: PrivateCustomerInfo;
  businessCustomerInfo: BusinessCustomerInfo;
  customerInfoLabels: string[];

  leasingModelArray = [];

  customerInfoArray = [];

  constructor(private dataService: DataStorageService,
              private backendService: BackendService) {
    const labels = new TextLabels();

    this.leasingModel = this.dataService.getLeasingModel();
    this.checkLeasingStatus = !(this.dataService.getLeasingStatus() === '');
    this.leasingStatus = this.dataService.getLeasingStatus();
    this.leasingLabels = new LeasingFormLabels().leasingFormLabels;

    this.isCustomerPrivate();
    if (this.privateCustomer) {
      this.privateCustomerInfo = this.dataService.getPrivateInfo();
      this.customerInfoLabels = labels.privateInfoLabels;
      this.setupPrivateCustomerInfoArray();
    } else {
      this.businessCustomerInfo = this.dataService.getBusinessInfo();
      this.customerInfoLabels = labels.businessInfoLabels;
      this.setupBusinessCustomerInfoArray();
    }

    this.setupLeasingModelArray();
  }

  sendFormToBackend() {
    this.backendService.sendCompletedForm();
  }

  private isCustomerPrivate() {
    this.privateCustomer = this.dataService.getLeasingModel().customerType === 'Private';
  }

  private setupPrivateCustomerInfoArray() {
    this.customerInfoArray.push({heading: this.customerInfoLabels[1], value: this.privateCustomerInfo.name});
    this.customerInfoArray.push({heading: this.customerInfoLabels[2], value: this.privateCustomerInfo.lastName});
    this.customerInfoArray.push({heading: this.customerInfoLabels[3], value: this.privateCustomerInfo.code.toString()});
    this.customerInfoArray.push({heading: this.customerInfoLabels[4], value: this.privateCustomerInfo.email});
    this.customerInfoArray.push({heading: this.customerInfoLabels[5], value: this.privateCustomerInfo.phoneNumber});
    this.customerInfoArray.push({heading: this.customerInfoLabels[6], value: this.privateCustomerInfo.address});
  }

  private setupBusinessCustomerInfoArray() {
    this.customerInfoArray.push({heading: this.customerInfoLabels[1], value: this.businessCustomerInfo.name});
    this.customerInfoArray.push({heading: this.customerInfoLabels[3], value: this.businessCustomerInfo.code.toString()});
    this.customerInfoArray.push({heading: this.customerInfoLabels[4], value: this.businessCustomerInfo.email});
    this.customerInfoArray.push({heading: this.customerInfoLabels[5], value: this.businessCustomerInfo.phoneNumber});
    this.customerInfoArray.push({heading: this.customerInfoLabels[6], value: this.businessCustomerInfo.address});
  }

  private setupLeasingModelArray() {

    this.leasingModelArray.push({heading: this.leasingLabels[0], value: this.leasingModel.customerType});
    this.leasingModelArray.push({heading: this.leasingLabels[1], value: this.leasingModel.assetType});
    this.leasingModelArray.push({heading: this.leasingLabels[2], value: this.leasingModel.carBrand});
    this.leasingModelArray.push({heading: this.leasingLabels[3], value: this.leasingModel.carModel});
    this.leasingModelArray.push({heading: this.leasingLabels[4], value: this.leasingModel.manufacturedDate});
    this.leasingModelArray.push({heading: this.leasingLabels[5], value: this.leasingModel.enginePower.toString()});
    this.leasingModelArray.push({heading: this.leasingLabels[6], value: this.leasingModel.assetPrice.toString()});
    this.leasingModelArray.push({heading: this.leasingLabels[7], value: this.leasingModel.advancePaymentPercentage.toString()});
    this.leasingModelArray.push({heading: this.leasingLabels[8], value: this.leasingModel.advancePaymentAmount});
    this.leasingModelArray.push({heading: this.leasingLabels[9], value: this.leasingModel.leasePeriodInMonths.toString()});
    this.leasingModelArray.push({heading: this.leasingLabels[10], value: this.leasingModel.margin.toString()});
    this.leasingModelArray.push({heading: this.leasingLabels[11], value: this.leasingModel.contractFee});
    this.leasingModelArray.push({heading: this.leasingLabels[12], value: this.leasingModel.paymentDate.toString()});

  }
}
