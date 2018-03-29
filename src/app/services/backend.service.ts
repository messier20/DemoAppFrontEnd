import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataStorageService} from './data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';
import {CheckStatusInfo} from "../models/CheckStatusInfo";
// import {CheckStatusInfo} from '../models/CheckStatusInfo';

@Injectable()
export class BackendService {

  httpLink = 'http://localhost:8080/';
  businessCustomerLink = 'user/business';
  privateCustomerLink = 'user/private';
  headers;

  constructor(private http: HttpClient,
              private dataStorage: DataStorageService) {
  }

  sendCompletedForm() {
    if (this.dataStorage.getLeasingModel().customerType === 'Private') {
      this.sendPrivateForm();

    } else if (this.dataStorage.getLeasingModel().customerType === 'Business') {
      this.sendBusinessForm();

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
    console.log(postBody);

    return this.http.post(this.httpLink + this.privateCustomerLink, postBody).toPromise();
  }

  getBusinessFormById(checkData: CheckStatusInfo) {
    return this.http.get(this.httpLink + this.businessCustomerLink + '/' + checkData.id).toPromise();
  }

  getPrivateFormById(checkData: CheckStatusInfo) {
    return this.http.get(this.httpLink + this.privateCustomerLink + '/' + checkData.id).toPromise();
  }

  getAllPosts(status) {
    return this.http
      .get('//localhost:8080/user/private/status/' + status)
      .toPromise();
  }

  updatePrivateCustomerStatus(id, postBody) {
    // const postBody = {
    //   customerLeasing: DataStorageService.refactorCustomerType(this.dataStorage.getLeasingModel()),
    //   privateCustomer: this.dataStorage.getPrivateInfo()
    // };

    return this.http
      .put('//localhost:8080/user/private/update/' + id, postBody ).toPromise();
      // .toPromise()
  }


  // updation() {
  //
  //   this.headers = new HttpHeaders()
  // .
  //   set("Content-Type", "application/json");
  //
  //   this.httpLink.put("/courses/-KgVwECOnlc-LHb_B0cQ.json",
  //     {
  //       "courseListIcon": ".../main-page-logo-small-hat.png",
  //       "description": "Angular Tutorial For Beginners TEST",
  //       "iconUrl": ".../angular2-for-beginners.jpg",
  //       "longDescription": "...",
  //       "url": "new-value-for-url"
  //     },
  //     {headers})
  //     .subscribe(
  //       val => {
  //         console.log("PUT call successful value returned in body",
  //           val);
  //       },
  //       response => {
  //         console.log("PUT call in error", response);
  //       },
  //       () => {
  //         console.log("The PUT observable is now completed.");
  //       }
  //     );

  // }
}
