import {Injectable} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {Repayment} from '../models/Repayment';
import {OfficerLoginModel} from '../models/OfficerLoginModel';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataStorageService {

  private leasingModel: LeasingModel;
  private businessCustomerInfo: BusinessCustomerInfo;
  private privateCustomerInfo: PrivateCustomerInfo;
  private leasingCalculator: LeasingCalculator;
  private repaymentPlan: Repayment[];
  private customerId: string;
  private _officerLoginModel: OfficerLoginModel;
  private _wrongLoginCredentials = false;

  // static refactorCustomerType(form) {
  //   if (form.customerType === 'Private') {
  //     form.customerType = 'PRIVATE';
  //     return form;
  //
  //   } else if (form.customerType === 'Business') {
  //     form.customerType = 'BUSINESS';
  //     return form;
  //
  //   } else if (form.customerType === 'PRIVATE') {
  //     form.customerType = 'Private';
  //     return form;
  //
  //   } else if (form.customerType === 'BUSINESS') {
  //     form.customerType = 'Business';
  //     return form;
  //
  //   } else {
  //     console.log('Error in data-storage-service.refactorCustomerType(), could not refactor. Value: ' + form.customerType);
  //   }
  // }

  deleteAllLeasingData() {
    this.leasingModel = undefined;
    this.businessCustomerInfo = undefined;
    this.privateCustomerInfo = undefined;
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

  setLeasingCalculator(givenLeasingCalculator) {
    this.leasingCalculator = givenLeasingCalculator;
  }

  getLeasingCalculator() {
    return this.leasingCalculator;
  }

  setRepaymentPlan(givenRepaymentPlan) {
    this.repaymentPlan = givenRepaymentPlan;
  }

  getRepaymentPlan() {
    return this.repaymentPlan;
  }

  setCustomerId(givenCustomerId) {
    this.customerId = givenCustomerId;
  }

  getCustomerId() {
    return this.customerId;
  }

  get officerLoginModel(): OfficerLoginModel {
    return this._officerLoginModel;
  }

  set officerLoginModel(value: OfficerLoginModel) {
    this._officerLoginModel = value;
  }

  get wrongLoginCredentials(): boolean {
    return this._wrongLoginCredentials;
  }

  set wrongLoginCredentials(value: boolean) {
    this._wrongLoginCredentials = value;
  }
}
