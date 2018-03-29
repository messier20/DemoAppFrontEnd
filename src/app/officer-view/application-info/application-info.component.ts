import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LeasingModel} from "../../models/LeasingModel";
// import {LeasingFormLabels} from "../../models/LeasingFormLabels";
import {BusinessCustomerInfo} from "../../models/businessCustomerInfo";
import {PrivateCustomerInfo} from "../../models/privateCustomerInfo";
import {DataStorageService} from "../../services/data-storage-service.service";
import {BackendService} from "../../services/backend.service";
// import {LeasingFormLabels} from "../../constants/LeasingFormLabels";
import {CustomerInfoLabels} from "../../constants/CustomerInfoLabels";
import {LeasingFormLabels} from "../../constants/LeasingFormLabels";
import {DialogFormComponent} from "../../dialog-form/dialog-form";
import {MatDialog} from "@angular/material";
// import {TextLabels} from "../../models/TextLabels";

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
export class ApplicationInfoComponent implements OnInit {


  leasesModel: LeasingModel[];
  leasesModelList: LeasingModel[];
  leasingFormLabels = new LeasingFormLabels();
  privateInfoLabels = new CustomerInfoLabels().privateInfoLabels;
  // privateInfoLabels = new TextLabels().privateInfoLabels;

  private businessCustomerModel: BusinessCustomerInfo;
  private privateCustomerModel: PrivateCustomerInfo;
  public isCollapsed = true;
  // public isDisabled = false;
  public disabled = false;
  public ob;
  sm;

  constructor(private dataService: DataStorageService,
              private backendService: BackendService
              ) {

  }

  ngOnInit() {

  }

  @Input() lease;
  @Input() leasesInfoOfPrivate;
  @Input() leases;
  @Output() updateApplication = new EventEmitter<Object>();

  submit() {

    // updatePrivateCustomerStatus() {
    //   // this.disabled = true;
    //   this.backendService.updatePrivateCustomerStatus(this.lease.id)
    //     .then(data => {
    //       this.updateApplication.emit()
    //     });
    //   console.log("in update")
    // }


  }
  setAprovedStatus() {
    this.lease.status = "PENDING";
    this.approvePrivateCustomerStatus()
    return true;
  }

  setDeniedStatus() {
    this.lease.status = "PENDING";
    this.approvePrivateCustomerStatus()
    return true;
  }

  approvePrivateCustomerStatus() {


    let postBody = {
      customerLeasing: this.lease.leasingModel,
      privateCustomer: this.lease.privateCustomerInfo,
      status: this.lease.status,
      idHex: this.lease.id
    }

    console.log("post body", postBody);
    // this.disabled = true;
    this.backendService.updatePrivateCustomerStatus(this.lease.id, postBody)
      .then(data => {
        this.updateApplication.emit()
      });
    console.log("in update")
  }


//   onDisplay(){
//   this.dialog.open(DialogFormComponent, {
//     data: {
//       leasingModel: this.lease.leasingModel,
//       privateInfo: this.lease.privateCustomerInfo
//       // businessInfo: this.businessCustomerInfo
//     }
// });
// };



  // getAllsm() {
  //   this.sm = this.lease.leasingModel.carModel;
  //   return this.sm.toPromise();
  //
  // }
  // refresh() {

    // console.log("lalala ", this.leasesModel.carModel)
    // this.backendService.getAllPosts("PENDING")
    //   .then(data => {
    //     this.leases = data;
    //
    //     this.leases.forEach(lease => {
    //       this.sm = this.lease.leasingModel.customerType;
    //     });
    //     console.log("sm", this.sm);
    //       lease.id.date = (lease.id.date).substr(0,10);
    //       // this.leasesModel.customerType = lease.customerLeasingForm.customerType;
    //       // console.log("lease model: ", this.leasesModel.customerType);
    //       // this.leasesModel.carModel = lease.customerLeasingForm.carModel;
    //       // this.dataService.setLeasingModel(lease.customerLeasingForm);
    //       // this.leasesModel = [this.dataService.getLeasingModel()];
    //       // console.log("all data: ", lease);
    //       // console.log("lease: ", lease.customerLeasing.carModel);
    //       // console.log("set", this.dataService.getLeasingModel().carModel);
    //       // console.log("this leases model: ", this.leasesModel);
    //     });
    //     console.log("list", this.leasesModelList);

        // console.log('subscribe', this.leases)
        // console.log("cust type", this.leasesModel.customerType);
      // });


    // return this.leasesModel;

    // return this.leases;
  // }

  // setLeases() {
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

  // }

}
