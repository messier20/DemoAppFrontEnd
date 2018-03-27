import {Component, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataStorageService} from "../services/data-storage-service.service";
import {BackendService} from "../services/backend.service";
import {LeasingModel} from "../models/LeasingModel";
import {BusinessCustomerInfo} from "../models/businessCustomerInfo";
import {PrivateCustomerInfo} from "../models/privateCustomerInfo";

@Component({
  selector: 'app-officer-view',
  templateUrl: './officer-view.component.html',
  styleUrls: ['./officer-view.component.css']
})
export class OfficerViewComponent implements OnInit {

   leasesModel: [LeasingModel];
  private businessCustomerModel: BusinessCustomerInfo;
  private privateCustomerModel: PrivateCustomerInfo;
  public isCollapsed = false;
  public ob;
  leases;


  constructor(private dataService: DataStorageService,
              private backendService: BackendService,) {

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
    this.backendService.getAllPosts()
      .then(data => {
        this.leases = data;
        this.leases.forEach(lease => {
          // this.leasesModel.customerType = lease.customerLeasingForm.customerType;
          // console.log("lease model: ", this.leasesModel.customerType);
          // this.leasesModel.carModel = lease.customerLeasingForm.carModel;
          this.dataService.setLeasingModel(lease.customerLeasingForm);
          this.leasesModel = [this.dataService.getLeasingModel()];
          console.log("lease: ", lease.customerLeasingForm.carModel);
          console.log("set", this.dataService.getLeasingModel().carModel);
          console.log("this leases model: ", this.leasesModel);
        })

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
