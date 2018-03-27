import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataStorageService} from './data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';

@Injectable()
export class BackendService {

  httpLink = 'http://localhost:8080/';
  businessCustomerLink = 'add-business-customer-form';
  privateCustomerLink = 'add-private-customer-form';

  constructor(private http: HttpClient,
              private dataStorage: DataStorageService) {
  }

  sendCompletedForm() {
    if (this.dataStorage.getLeasingModel().customerType === 'Private') {
      return this.sendPrivateForm();
    } else {
      return this.sendBusinessForm();
    }
  }

  sendBusinessForm() {
    const postBody = {
      customerLeasingForm: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      businessCustomerForm: DataStorageService.refactorCustomerType(this.dataStorage.getBusinessInfo())
    };

    this.http.post(this.httpLink + this.businessCustomerLink, postBody).toPromise();
  }

  sendPrivateForm() {
    const postBody = {
      customerLeasingForm: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      privateCustomerForm: DataStorageService.refactorCustomerType(this.dataStorage.getPrivateInfo())
    };
    console.log(postBody);

    this.http.post(this.httpLink + this.privateCustomerLink, postBody).toPromise();
  }

}
