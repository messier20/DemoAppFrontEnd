import {Injectable} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';

@Injectable()
export class DataStorageService {


  private leasingModel: LeasingModel;
  private privateCustomerInfo: PrivateCustomerInfo;
  private businessCustomerInfo: BusinessCustomerInfo;
  private leasingModelArray: string[];

  setLeasingModel(leasingModel) {
    this.leasingModel = leasingModel;
  }

  getLeasingModel() {
    return this.leasingModel;
  }

  setPrivateCustomerInfo(privateCustomerInfo) {
    this.privateCustomerInfo = privateCustomerInfo;
  }

  getPrivateCustomerInfo() {
    return this.privateCustomerInfo;
  }

  setBusinessCustomerInfo(businessCustomerInfo) {
    this.businessCustomerInfo = businessCustomerInfo;
  }

  getBusinessCustomerInfo() {
    return this.businessCustomerInfo;
  }

  public toArray(): string[] {
    this.leasingModelArray[0] = this.leasingModel.customerType;
    this.leasingModelArray[1] = this.leasingModel.assetType;
    this.leasingModelArray[2] = this.leasingModel.carBrand;
    this.leasingModelArray[3] = this.leasingModel.carModel;
    this.leasingModelArray[4] = this.leasingModel.manufacturedDate;
    this.leasingModelArray[5] = this.leasingModel.enginePower.toString();
    this.leasingModelArray[6] = this.leasingModel.assetPrice.toString();
    this.leasingModelArray[7] = this.leasingModel.advancePaymentPercentage.toString();
    this.leasingModelArray[8] = this.leasingModel.advancePaymentAmount;
    this.leasingModelArray[9] = this.leasingModel.leasePeriodInMonths.toString();
    this.leasingModelArray[10] = this.leasingModel.margin.toString();
    this.leasingModelArray[11] = this.leasingModel.contractFee;
    this.leasingModelArray[12] = this.leasingModel.paymentDate.toString();

    return this.leasingModelArray;
  }
}
