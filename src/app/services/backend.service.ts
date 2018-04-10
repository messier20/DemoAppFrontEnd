import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataStorageService} from './data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';
import {CheckStatusInfo} from '../models/CheckStatusInfo';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {OfficerLoginModel} from '../models/OfficerLoginModel';
import {AuthGuardService} from './auth-guard.service';
import {ObserveOnMessage} from "rxjs/operators/observeOn";
import {Observable} from "rxjs/Observable";
import {Repayment} from "../models/Repayment";
import {Repayments} from "../models/Repayments";

@Injectable()
export class BackendService {

  httpLink = 'https://the-blue-back-end.herokuapp.com/';
  // httpLink = 'http://localhost:8080/';

  businessCustomerLink = 'user/business';
  privateCustomerLink = 'user/private';
  repaymentScheduleLink = 'user/calculator/loan/vehicle';
  officerLink = '';


  constructor(private http: HttpClient,
              private dataStorage: DataStorageService) {
  }

  sendCompletedForm() {
    if (this.dataStorage.getLeasingModel().customerType === 'PRIVATE') {
      return this.sendPrivateForm();

    } else if (this.dataStorage.getLeasingModel().customerType === 'BUSINESS') {
      return this.sendBusinessForm();

    } else {
      console.log('Error in backendService, could not determine customerType of form');
    }
  }

  sendBusinessForm() {
    const postBody = {
      leasing: this.dataStorage.getLeasingModel(),
      customer: this.dataStorage.getBusinessInfo()
    };

    return this.http.post(this.httpLink + this.businessCustomerLink, postBody).toPromise();
  }

  sendPrivateForm() {
    const postBody = {
      leasing: this.dataStorage.getLeasingModel(),
      customer: this.dataStorage.getPrivateInfo()
    };

    return this.http.post(this.httpLink + this.privateCustomerLink, postBody).toPromise();
  }

  getBusinessFormById(checkData: CheckStatusInfo) {
    return this.http.get(this.httpLink + this.businessCustomerLink + '/' + checkData.id).toPromise();
  }

  getPrivateFormById(checkData: CheckStatusInfo) {
    return this.http.get(this.httpLink + this.privateCustomerLink + '/' + checkData.id).toPromise();
  }

  sendLeasingCalculatorInput(leasingCalculatorInput: LeasingCalculator) {
    return this.http.post(this.httpLink + this.repaymentScheduleLink, leasingCalculatorInput).toPromise();
  }

  getRepaymentShedule(leasingCalculatorInput: LeasingCalculator): Promise<Repayments[]> {
    return this.http.post<Repayments[]>(this.httpLink + this.repaymentScheduleLink, leasingCalculatorInput).toPromise();
  }

  // getAllPrivateUserApplicationsByStatus(status) {
  //   return this.http
  //     .get(this.httpLink + this.officerLink + '/user/private/status/' + status)
  //     .toPromise();
  // }
  //
  // getAllBusinessUserApplicationsByStatus(status) {
  //   return this.http
  //     .get(this.httpLink + this.officerLink + '/user/business/status/' + status)
  //     .toPromise();
  // }
  // getAllPrivateUserApplications() {
  //   return this.http
  //     .get(this.httpLink + this.officerLink + '/user/private')
  //     .toPromise();
  // }
  //
  // getAllBusinessUserApplications() {
  //   return this.http
  //     .get(this.httpLink + '/user/business')
  //     .toPromise();
  // }

  updatePrivateCustomerStatus(id, postBody) {
    return this.http
      .put(this.httpLink + this.officerLink + '/user/private/update/' + id, postBody ).toPromise();
    // .toPromise()
  }

  updateBusinessCustomerStatus(id, postBody) {
    return this.http
      .put(this.httpLink + this.officerLink + '/user/business/update/' + id, postBody ).toPromise();
  }

  getAllCustomer() {
    return this.http
      .post(this.httpLink + this.officerLink + 'users', this.dataStorage.officerLoginModel)
      .toPromise();
  }

  loginUser(loginModel: OfficerLoginModel) {
    return this.http.put(this.httpLink + 'login', loginModel).toPromise();
  }


}
