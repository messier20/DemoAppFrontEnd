import {Injectable} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';

@Injectable()
export class DataStorageService {

  private leasingModel: LeasingModel;
  private businessCustomerInfo: BusinessCustomerInfo;
  private privateCustomerInfo: PrivateCustomerInfo;
  private leasingStatus: string;

  static refactorCustomerType(form) {
    if (form.customerType === 'Private') {
      form.customerType = 'PRIVATE';
      return form;

    } else if (form.customerType === 'Business') {
      form.customerType = 'BUSINESS';
      return form;

    } else if (form.customerType === 'PRIVATE') {
      form.customerType = 'Private';
      return form;

    } else if (form.customerType === 'BUSINESS') {
      form.customerType = 'Business';
      return form;

    } else {
      console.log('Error in data-storage-service.refactorCustomerType(), could not refactor. Value: ' + form.customerType);
    }
  }

  setLeasingModel(givenLeasingModel) {
    this.leasingModel = givenLeasingModel;
  }

  getLeasingModel() {
    return this.leasingModel;
  }

  setBusinessInfo(givenBusinessInfo) {
    this.businessCustomerInfo = givenBusinessInfo;
  }

  getBusinessInfo() {
    return this.businessCustomerInfo;
  }

  setPrivateInfo(givenPrivateInfo) {
    this.privateCustomerInfo = givenPrivateInfo;
  }

  getPrivateInfo() {
    return this.privateCustomerInfo;
  }

  setLeasingStatus(givenLeasingStatus) {
    this.leasingStatus = givenLeasingStatus;
  }

  getLeasingStatus() {
    return this.leasingStatus;
  }
}
