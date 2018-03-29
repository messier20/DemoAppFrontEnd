import {Component, Input, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataStorageService} from "../services/data-storage-service.service";
import {BackendService} from "../services/backend.service";
import {LeasingModel} from "../models/LeasingModel";
import {BusinessCustomerInfo} from "../models/businessCustomerInfo";
import {PrivateCustomerInfo} from "../models/privateCustomerInfo";
import {LeasingFormLabels} from "../constants/LeasingFormLabels";
import {LeaseInfoOfPrivate} from "../models/LeaseInfoOfPrivate";
import {LeaseInfoService} from "../services/lease-info.service";
// import {LeasingFormLabels} from "../models/LeasingFormLabels";

@Component({
  selector: 'app-officer-view',
  templateUrl: './officer-view.component.html',
  styleUrls: ['./officer-view.component.css']
})
export class OfficerViewComponent implements OnInit {

   leasesModel: LeasingModel[];
   leasesModelList: LeasingModel[];
   leasesModel2: LeasingModel;
  leasingFormLabels = new LeasingFormLabels();
  private businessCustomerModel: BusinessCustomerInfo;
  private privateCustomerModel: PrivateCustomerInfo;
  public isCollapsed = true;
  public ob;
  leases;

   leasesInfoOfPrivate: LeaseInfoOfPrivate[] = [];


  constructor(private dataService: DataStorageService,
              private backendService: BackendService,
              private leasesInfoService: LeaseInfoService
              // private leasesInfoService: LeaseInfoService
             ) {

  }

  ngOnInit() {
    // this.ob = [
    //   // this.dataService.getPrivateInfo(),
    //   // this.dataService.getLeasingModel(),
    // ];
    this.refresh();
    this.setLeases();
  }


  refresh() {

    // console.log("lalala ", this.leasesModel.carModel)
    this.backendService.getAllPosts("PENDING")
      .then(data => {
        this.leases = data;


        // this.leasesInfoOfPrivate.forEach( objectIndex => {
        //
        // });

        // this.leases.forEach(lease => {
        //   this.leasesInfoOfPrivate.status;
        // });
        // this.leasesInfoService.leaseInfoOfPrivate[data];
        // this.leasesInfoOfPrivate = [data];


        this.leases.forEach(lease => {

          this.leasesInfoOfPrivate.push(new LeaseInfoOfPrivate(lease));
          // this.leasesInfoOfPrivate = [lease.customerLeasing, lease.privateCustomer, lease.status];
          // this.leasesInfoService.leaseInfoOfPrivate[lease.customerLeasing];
          // this.leasesInfoService.setleaseInfoOfPrivate[lease];

          // this.leasesInfoService.leaseInfoOfPrivate[lease];
          // this.leasesInfoOfPrivate = [lease];
          lease.id.date = (lease.id.date).substr(0,10);
          // this.leasesModel.customerType = lease.customerLeasingForm.customerType;
          // console.log("lease model: ", this.leasesModel.customerType);
          // this.leasesModel.carModel = lease.customerLeasingForm.carModel;
          // this.dataService.setLeasingModel(lease.customerLeasing);
          // this.leasesModel = [this.dataService.getLeasingModel()];
          // this.leasesModel2 = this.dataService.getLeasingModel();
          console.log("all data: ", lease);
          // console.log("lease: ", lease.customerLeasing.carModel);
          // console.log("set", this.dataService.getLeasingModel().carModel);
          // console.log("this leases model: ", this.leasesModel);
          console.log("array", this.leasesInfoOfPrivate);
        });

        // console.log("list", this.leasesModelList);

        // console.log('subscribe', this.leases)
        // console.log("cust type", this.leasesModel.customerType);
      });


    // return this.leasesModel;

    // return this.leases;
  }

  setLeases() {
    // this.leases.forEach(lease => {
    //   console.log("lease sete", lease);
    //     this.leasesModel = this.dataService.getLeasingModel();
    //     console.log("leasesmodel", this.dataService.getLeasingModel());
    //   });
    // console.log("getas", this.dataService.getLeasingModel());
    // console.log("getas2", this.leasesModel);
      //   this.leases.forEach(lease => {
      //   this.leasesModel = this.dataService.getLeasingModel();
      //   console.log("leasesmodel", this.dataService.getLeasingModel());
      // }));


    //
    // setLeases() {
    //   this.refresh().forEach(data => {
    //     console.log("test", data);
    //   });
    //   // console.log("leasesModel1: ", this.leases);
    //   // this.leases.forEach(lease => {
    //   //   this.leasesModel = lease.customerLeasingForm;
    //   //   console.log("leasesModel: ", this.leasesModel);
    //   // })
    // }

  }
}
