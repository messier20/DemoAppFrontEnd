import {Component, Input, OnInit} from '@angular/core';
import {LeasingModel} from "../../models/LeasingModel";
// import {LeasingFormLabels} from "../../models/LeasingFormLabels";
import {BusinessCustomerInfo} from "../../models/businessCustomerInfo";
import {PrivateCustomerInfo} from "../../models/privateCustomerInfo";
import {DataStorageService} from "../../services/data-storage-service.service";
import {BackendService} from "../../services/backend.service";
import {LeasingFormLabels} from "../../constants/LeasingFormLabels";
import {CustomerInfoLabels} from "../../constants/CustomerInfoLabels";
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

  @Input() lease;


  refresh() {

    this.backendService.getAllPosts("PENDING")
      .then(data => {
        this.leases = data;
        this.leases.forEach(lease => {
          lease.id.date = (lease.id.date).substr(0,10);
          // this.leasesModel.customerType = lease.customerLeasingForm.customerType;
          // console.log("lease model: ", this.leasesModel.customerType);
          // this.leasesModel.carModel = lease.customerLeasingForm.carModel;
          this.dataService.setLeasingModel(lease.customerLeasingForm);
          this.leasesModel = [this.dataService.getLeasingModel()];
          console.log("all data: ", lease);
          console.log("lease: ", lease.customerLeasingForm.carModel);
          console.log("set", this.dataService.getLeasingModel().carModel);
          console.log("this leases model: ", this.leasesModel);
        });
        console.log("list", this.leasesModelList);

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
