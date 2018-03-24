import {Injectable} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';

@Injectable()
export class DataStorageService {


  private leasingModel: LeasingModel;
  private privateCustomerInfo: PrivateCustomerInfo;
  private businessCustomerInfo: BusinessCustomerInfo;

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

}
