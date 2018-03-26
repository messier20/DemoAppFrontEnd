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

  leasingModel: LeasingModel;
  leasingLabels;

  privateCustomerInfo: PrivateCustomerInfo;
  businessCustomerInfo: BusinessCustomerInfo;
  customerInfoLabels: string[];

  leasingModelArray = [
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''},
    {heading: '', value: ''}
  ];

  customerInfoArray = [];

  constructor(private dataService: DataStorageService, private backendService: BackendService) {
    const labels = new TextLabels();

    this.leasingModel = this.dataService.getLeasingModel();
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
    for (let i = 0; i < this.leasingLabels.length; i++) {
      this.leasingModelArray[i].heading = this.leasingLabels[i];
    }

    this.leasingModelArray[0].value = this.leasingModel.customerType;
    this.leasingModelArray[1].value = this.leasingModel.assetType;
    this.leasingModelArray[2].value = this.leasingModel.carBrand;
    this.leasingModelArray[3].value = this.leasingModel.carModel;
    this.leasingModelArray[4].value = this.leasingModel.manufacturedDate;
    this.leasingModelArray[5].value = String(this.leasingModel.enginePower);
    this.leasingModelArray[6].value = String(this.leasingModel.assetPrice);
    this.leasingModelArray[7].value = String(this.leasingModel.advancePaymentPercentage);
    this.leasingModelArray[8].value = String(this.leasingModel.advancePaymentAmount);
    this.leasingModelArray[9].value = String(this.leasingModel.leasePeriodInMonths);
    this.leasingModelArray[10].value = String(this.leasingModel.margin);
    this.leasingModelArray[11].value = String(this.leasingModel.contractFee);
    this.leasingModelArray[12].value = String(this.leasingModel.paymentDate);
  }
}
