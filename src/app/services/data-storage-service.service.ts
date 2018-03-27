import {Injectable} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/businessCustomerInfo';
import {PrivateCustomerInfo} from '../models/privateCustomerInfo';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {Repayment} from '../models/Repayment';

@Injectable()
export class DataStorageService {

  private leasingModel: LeasingModel;
  private businessCustomerInfo: BusinessCustomerInfo;
  private privateCustomerInfo: PrivateCustomerInfo;
  private leasingCalculator: LeasingCalculator;
  private repaymentPlan: Repayment[];


  static refactorCustomerType(form) {

    if (form.customerType === 'Private') {
      form.customerType = 'PRIVATE';
      return form;

    } else {
      form.customerType = 'BUSINESS';
      return form;
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
}