import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataStorageService} from './data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';
import {CheckStatusInfo} from '../models/CheckStatusInfo';

@Injectable()
export class BackendService {

  httpLink = 'http://localhost:8080/';
  businessCustomerLink = 'user/business';
  privateCustomerLink = 'user/private';

  constructor(private http: HttpClient,
              private dataStorage: DataStorageService) {
  }

  sendCompletedForm() {
    if (this.dataStorage.getLeasingModel().customerType === 'Private') {
      return this.sendPrivateForm();

    } else if (this.dataStorage.getLeasingModel().customerType === 'Business') {
      return this.sendBusinessForm();

    } else {
      console.log('Error in backendService, could not determine customerType of form');
    }
  }

  sendBusinessForm() {
    const postBody = {
      customerLeasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      businessCustomer: this.dataStorage.getBusinessInfo()
    };

    return this.http.post(this.httpLink + this.businessCustomerLink, postBody).toPromise();
  }

  sendPrivateForm() {
    const postBody = {
      customerLeasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      privateCustomer: this.dataStorage.getPrivateInfo()
    };

    return this.http.post(this.httpLink + this.privateCustomerLink, postBody).toPromise();
  }

  getBusinessFormById(checkData: CheckStatusInfo) {
    return this.http.get(this.httpLink + this.businessCustomerLink + '/' + checkData.id).toPromise();
  }

  getPrivateFormById(checkData: CheckStatusInfo) {
    return this.http.get(this.httpLink + this.privateCustomerLink + '/' + checkData.id).toPromise();
  }

}
