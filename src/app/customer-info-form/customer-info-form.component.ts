import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-info-form',
  templateUrl: './customer-info-form.component.html',
  styleUrls: ['./customer-info-form.component.css']
})
export class CustomerInfoFormComponent implements OnInit {
  privateLabels = ['First Name', 'Personal Code', 'Email', 'Phone no.', 'Address', 'Last Name'];
  businessLabels = ['Company Name', 'Company Code', 'Email', 'Phone no.', 'Address', 'Empty'];
  formLabels: String[];
  infoForm: FormGroup;

  constructor(private dataService: DataStorageService) {
    this.infoForm = new FormGroup({
      email: new FormControl()
    });
  }

  ngOnInit() {
    if (this.dataService.getLeasingModel().customerType === 'Private') {
      this.formLabels = this.privateLabels;
    } else {
      this.formLabels = this.businessLabels;
    }
    console.log(this.formLabels.toString());
  }

  submitForm() {
    // console.log('First name: ' + this.privateCustomerInfo.firstName);
    // console.log('Last name: ' + this.privateCustomerInfo.lastName);
    // console.log('Personal Code: ' + this.privateCustomerInfo.personalCode);
    // console.log('Personal email: ' + this.privateCustomerInfo.personalEmail);
    // console.log('Phone number: ' + this.privateCustomerInfo.phoneNumber);
    // console.log('Address: ' + this.privateCustomerInfo.address);

  }

}
