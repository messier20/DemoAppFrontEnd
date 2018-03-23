import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LeasingModel} from '../models/LeasingModel';

@Injectable()
export class BackendService {

  httpLink = 'http://localhost:8080/';
  customerLeasingLink = 'customerLeasingForm';

  constructor(private http: HttpClient) {
  }

  submitForm(leasingForm: LeasingModel) {
    this.http.post(this.httpLink + this.customerLeasingLink, leasingForm).toPromise();
  }

}
