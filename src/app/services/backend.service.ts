import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataStorageService} from './data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';
import {CheckStatusInfo} from '../models/CheckStatusInfo';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {OfficerLoginModel} from '../models/OfficerLoginModel';

@Injectable()
export class BackendService {

  // httpLink = 'https://the-blue-back-end.herokuapp.com/';
  httpLink = 'http://localhost:8080/';

  businessCustomerLink = 'user/business';
  privateCustomerLink = 'user/private';
  repaymentScheduleLink = 'user/calculator/loan/vehicle';


  constructor(private http: HttpClient,
              private dataStorage: DataStorageService) {
  }

  sendCompletedForm() {
    if (this.dataStorage.getLeasingModel().customerType === 'Private') {
      return this.sendPrivateForm();

    } else if (this.dataStorage.getLeasingModel().customerType === 'Business') {
      return this.sendBusinessForm();

    } else {
      // console.log('Error in backendService, could not determine customerType of form');
    }
  }

  // sendBusinessForm() {
  //   const postBody = {
  //     customerLeasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
  //     businessCustomer: this.dataStorage.getBusinessInfo()
  //   };
  //
  //   return this.http.post(this.httpLink + this.businessCustomerLink, postBody).toPromise();
  // }

  sendBusinessForm() {
    const postBody = {
      leasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      customer: this.dataStorage.getBusinessInfo()
    };

    return this.http.post(this.httpLink + this.businessCustomerLink, postBody).toPromise();
  }

  // sendPrivateForm() {
  //   const postBody = {
  //     customerLeasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
  //     privateCustomer: this.dataStorage.getPrivateInfo()
  //   };
  //   // console.log(postBody);
  //
  //   return this.http.post(this.httpLink + this.privateCustomerLink, postBody).toPromise();
  // }

  sendPrivateForm() {
    const postBody = {
      leasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      customer: this.dataStorage.getPrivateInfo()
    };
    // console.log(postBody);

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

  getAllPrivateUserApplicationsByStatus(status) {
    return this.http
      .get(this.httpLink + '/user/private/status/' + status)
      .toPromise();
  }

  getAllBusinessUserApplicationsByStatus(status) {
    return this.http
      .get(this.httpLink + '/user/business/status/' + status)
      .toPromise();
  }

  getAllPrivateUserApplications() {
    return this.http
      .get(this.httpLink + '/user/private')
      .toPromise();
  }

  getAllBusinessUserApplications() {
    return this.http
      .get(this.httpLink + '/user/business')
      .toPromise();
  }

  updatePrivateCustomerStatus(id, postBody) {

    return this.http
      .put(this.httpLink + '/user/private/update/' + id, postBody).toPromise();
    // .toPromise()
  }

  updateBusinessCustomerStatus(id, postBody) {

    return this.http
      .put(this.httpLink + '/user/business/update/' + id, postBody).toPromise();
    // .toPromise()
  }

  loginUser(loginModel: OfficerLoginModel) {
    console.log('Login in backend');
    console.log(loginModel);

    return this.http.put(this.httpLink + 'login', loginModel).toPromise();

    // if (loginModel.email === 'officer@blueleasing.com' && loginModel.password === '123') {
    //   console.log('Login successful');
    //   return true;
    // } else {
    //   console.log('Login denied');
    //   return false;
    // }
  }


}
