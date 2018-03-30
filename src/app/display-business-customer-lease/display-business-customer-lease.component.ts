import {Component, Input, OnInit} from '@angular/core';
import {BusinessCustomerInfo} from "../models/BusinessCustomerInfo";
import {LeasingModel} from "../models/LeasingModel";

@Component({
  selector: 'app-display-business-customer-lease',
  templateUrl: './display-business-customer-lease.component.html',
  styleUrls: ['./display-business-customer-lease.component.css']
})
export class DisplayBusinessCustomerLeaseComponent implements OnInit {

  @Input() leasingModel: LeasingModel;
  @Input() businessCustomer : BusinessCustomerInfo;

  constructor() { }

  ngOnInit() {
  }

}
