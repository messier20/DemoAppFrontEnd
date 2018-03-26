import {Component} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {BackendService} from '../services/backend.service';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';
import {TextLabels} from '../models/TextLabels';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.html',
  styleUrls: ['./dialog-form.css']
})
export class DialogFormComponent {
  leasingModel;
  leasingLabels;

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

  constructor(private dataService: DataStorageService, private backendService: BackendService) {
    const labels = new TextLabels();
    this.leasingModel = this.dataService.getLeasingModel();
    this.leasingLabels = labels.leasingFormLabels;

    this.leasingModelArray[0].heading = this.leasingLabels[0];
    this.leasingModelArray[1].heading = this.leasingLabels[1];
    this.leasingModelArray[2].heading = this.leasingLabels[2];
    this.leasingModelArray[3].heading = this.leasingLabels[3];
    this.leasingModelArray[4].heading = this.leasingLabels[4];
    this.leasingModelArray[5].heading = this.leasingLabels[5];
    this.leasingModelArray[6].heading = this.leasingLabels[6];
    this.leasingModelArray[7].heading = this.leasingLabels[7];
    this.leasingModelArray[8].heading = this.leasingLabels[8];
    this.leasingModelArray[9].heading = this.leasingLabels[9];
    this.leasingModelArray[10].heading = this.leasingLabels[10];
    this.leasingModelArray[11].heading = this.leasingLabels[11];
    this.leasingModelArray[12].heading = this.leasingLabels[12];

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

  sendFormToBackend() {
    this.backendService.submitForm(this.leasingModel);
  }

}
