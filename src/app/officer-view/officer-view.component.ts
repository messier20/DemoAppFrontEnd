import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataStorageService} from "../services/data-storage-service.service";
import {BackendService} from "../services/backend.service";
import {LeasingModel} from "../models/LeasingModel";
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
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
  combined : any [] = [];
  idandDate: string[][] = [[],[]];
  id: string[] = [];
  names: any [] = [];


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
          // lease.id.date = (lease.id.date).substr(0, 10);
          lease.customerLeasing = DataStorageService.refactorCustomerType(lease.customerLeasing);
          this.id.push(lease.idHex);
          // console.log("lease id2", lease.id.toString());
          this.leasesInfoOfPrivate.push(new LeaseInfoOfPrivate(lease));
          // this.leasesInfoOfPrivate.filter(data => {
          //   this.idandDate.push([data.id],[data.date]);
          //   this.id.push(data.id);
          //   console.log("in private");
          //
          // });

          console.log("all data: ", lease);
          console.log("array", this.leasesInfoOfPrivate);
          console.log("id private", this.idandDate);
          console.log("id", this.id);
        });

        this.getBusiness();

      }
      );





  }

  getBusiness() {
    this.backendService.getAllBusinessUserApplications("PENDING")
      .then(data => {
        this.leases = data;
        this.leases.forEach(lease => {
          // console.log("lease id", lease.id);
          lease.id.date = (lease.id.date).substr(0, 10);
          lease.customerLeasing = DataStorageService.refactorCustomerType(lease.customerLeasing);
          // lease.id = lease.id.toString();
          this.id.push(lease.idHex);

          // console.log("lease id2", lease.id.toString());
          this.leasesInfoOfBusiness.push(new LeaseInfoOfBusiness(lease));
          // this.leasesInfoOfBusiness.filter(data => {
          //   this.idandDate.push([data.id],[data.date]);
          //   this.id.push(data.id);
          //   console.log("in business");

          // });

          console.log("all data: ", lease);
          console.log("array", this.leasesInfoOfBusiness);
          console.log("id private and business", this.idandDate);
          console.log("id", this.id);



        });
        console.log("all id", this.id);
        let a:any = this.leasesInfoOfPrivate;
        let b:any = this.leasesInfoOfBusiness;

        this.leasesInfoOfPrivate.forEach(data => {
          // lease.id.date = (lease.id.date).substr(0, 10);
          this.names.push(data.privateCustomerInfo.name);
          data.date = (data.date).substr(0,10);
        });

        this.leasesInfoOfBusiness.forEach(data => {
          // lease.id.date = (lease.id.date).substr(0, 10);
          data.date = (data.date).substr(0,10);
          this.names.push(data.businessCustomerInfo.name);
        });

        this.combined = a.concat(b);
        // this.combined.concat([], this.leasesInfoOfBusiness);
        console.log("combined", this.combined);
        this.combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        console.log("combinned after sort", this.combined);

      });
  }

}
