import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataStorageService} from './data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';

@Injectable()
export class BackendService {

  httpLink = 'http://localhost:8080/';
  // businessCustomerLink = 'add-business-customer-form';
  // privateCustomerLink = 'add-private-customer-form';

  businessCustomerLink = 'user/business';
  privateCustomerLink = 'user/private';

  constructor(private http: HttpClient,
              private dataStorage: DataStorageService) {
  }

  sendCompletedForm() {
    if (this.dataStorage.getLeasingModel().customerType === 'Private') {
      this.sendPrivateForm();
    } else {
      this.sendBusinessForm();
    }
  }

  sendBusinessForm() {
    const postBody = {
      customerLeasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      businessCustomer: DataStorageService.refactorCustomerType(this.dataStorage.getBusinessInfo())
    };

    this.http.post(this.httpLink + this.businessCustomerLink, postBody).toPromise();
  }

  sendPrivateForm() {
    const postBody = {
      customerLeasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
      privateCustomer: DataStorageService.refactorCustomerType(this.dataStorage.getPrivateInfo())
    };
    console.log(postBody);

    this.http.post(this.httpLink + this.privateCustomerLink, postBody).toPromise();
  }

  getAllPosts(status) {
    return this.http
      .get('//localhost:8080/user/private/status/' + status)
      .toPromise();
  }

}
