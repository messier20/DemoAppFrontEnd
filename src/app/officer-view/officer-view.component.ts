import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataStorageService} from "../services/data-storage-service.service";
import {BackendService} from "../services/backend.service";
import {LeasingModel} from "../models/LeasingModel";
import {BusinessCustomerInfo} from "../models/businessCustomerInfo";
import {PrivateCustomerInfo} from "../models/privateCustomerInfo";
import {LeasingFormLabels} from "../constants/LeasingFormLabels";
import {LeaseInfoOfPrivate} from "../models/LeaseInfoOfPrivate";
import {LeaseInfoService} from "../services/lease-info.service";
import {LeaseInfoOfBusiness} from "../models/LeaseInfoOfBusiness";

// import {LeasingFormLabels} from "../models/LeasingFormLabels";

@Component({
  selector: 'app-officer-view',
  templateUrl: './officer-view.component.html',
  styleUrls: ['./officer-view.component.css']
})
export class OfficerViewComponent implements OnInit {

  leases;
  // @Input() lease;

  leasesInfoOfPrivate: LeaseInfoOfPrivate[] = [];
  leasesInfoOfBusiness: LeaseInfoOfBusiness[] = [];
  id: string[] = [];


  constructor(private backendService: BackendService) {

  }

  ngOnInit() {
    this.refresh();

  }


  refresh() {

    this.backendService.getAllPrivateUserApplications("PENDING")
      .then(data => {
        this.leases = data;
        this.leases.forEach(lease => {
          // console.log("lease id", lease.id);
          lease.id.date = (lease.id.date).substr(0, 10);
          // lease.id = lease.id.toString();

          // console.log("lease id2", lease.id.toString());
          this.leasesInfoOfPrivate.push(new LeaseInfoOfPrivate(lease));
          this.leasesInfoOfPrivate.filter(data => {
            this.id.push(data.id);
          });

          console.log("all data: ", lease);
          console.log("array", this.leasesInfoOfPrivate);
          console.log("id private", this.id);
        });
      });

    this.backendService.getAllBusinessUserApplications("PENDING")
      .then(data => {
        this.leases = data;
        this.leases.forEach(lease => {
          // console.log("lease id", lease.id);
          lease.id.date = (lease.id.date).substr(0, 10);
          // lease.id = lease.id.toString();

          // console.log("lease id2", lease.id.toString());
          this.leasesInfoOfBusiness.push(new LeaseInfoOfBusiness(lease));
          this.leasesInfoOfBusiness.filter(data => {
            this.id.push(data.id);
          });

          console.log("all data: ", lease);
          console.log("array", this.leasesInfoOfBusiness);
          console.log("id private and business", this.id);
        });
      });


  }

}
