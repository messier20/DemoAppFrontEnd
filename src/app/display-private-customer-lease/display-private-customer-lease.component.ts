import {Component, Input, OnInit} from '@angular/core';
import {LeasingModel} from "../models/LeasingModel";
import {PrivateCustomerInfo} from "../models/PrivateCustomerInfo";
import {CustomerInfoLabels} from "../constants/CustomerInfoLabels";
import {LeasingFormLabels} from "../constants/LeasingFormLabels";

@Component({
  selector: 'app-display-private-customer-lease',
  templateUrl: './display-private-customer-lease.component.html',
  styleUrls: ['./display-private-customer-lease.component.css']
})
export class DisplayPrivateCustomerLeaseComponent implements OnInit {

  @Input() leasingModel: LeasingModel;
  @Input() privateCustomerInfo : PrivateCustomerInfo;
  leasingLabels;
  customerInfoLabels: string[];

  leasingModelArray = [];
  customerInfoArray = [];

  constructor() {
  }

  ngOnInit() {
    const labels = new CustomerInfoLabels();
    this.leasingLabels = new LeasingFormLabels().leasingFormLabels;


      this.customerInfoLabels = labels.privateInfoLabels;
      this.setupPrivateCustomerInfoArray();


    this.setupLeasingModelArray();
  }


  private setupPrivateCustomerInfoArray() {
    this.customerInfoArray.push({heading: this.customerInfoLabels[1], value: this.privateCustomerInfo.name});
    this.customerInfoArray.push({heading: this.customerInfoLabels[2], value: this.privateCustomerInfo.lastName});
    this.customerInfoArray.push({heading: this.customerInfoLabels[3], value: this.privateCustomerInfo.code.toString()});
    this.customerInfoArray.push({heading: this.customerInfoLabels[4], value: this.privateCustomerInfo.email});
    this.customerInfoArray.push({heading: this.customerInfoLabels[5], value: this.privateCustomerInfo.phoneNumber});
    this.customerInfoArray.push({heading: this.customerInfoLabels[6], value: this.privateCustomerInfo.address});
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
