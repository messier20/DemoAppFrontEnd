import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LeasingModel} from "../../models/LeasingModel";
// import {LeasingFormLabels} from "../../models/LeasingFormLabels";
import {BusinessCustomerInfo} from '../../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../../models/PrivateCustomerInfo';
import {DataStorageService} from "../../services/data-storage-service.service";
import {BackendService} from "../../services/backend.service";
// import {LeasingFormLabels} from "../../constants/LeasingFormLabels";
import {CustomerInfoLabels} from "../../constants/CustomerInfoLabels";
import {LeasingFormLabels} from "../../constants/LeasingFormLabels";
import {DialogFormComponent} from "../../dialog-form/dialog-form";
import {MatDialog} from "@angular/material";
import {LeaseInfoOfPrivate} from "../../models/LeaseInfoOfPrivate";
import {LeaseInfoOfBusiness} from "../../models/LeaseInfoOfBusiness";

// import {TextLabels} from "../../models/TextLabels";

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
export class ApplicationInfoComponent implements OnInit {


  @Input() leasesInfoOfPrivate;
  @Input() leasesInfoOfBusiness;
  @Input() i;
  @Input() lease;
  @Input() ida;
  @Output() updateApplication = new EventEmitter<Object>();


  leasesModel: LeasingModel[];
  leasesModelList: LeasingModel[];
  statusChanged = false;
  leasingFormLabels = new LeasingFormLabels();
  privateInfoLabels = new CustomerInfoLabels().privateInfoLabels;
  // privateInfoLabels = new TextLabels().privateInfoLabels;

  public isCollapsed = true;


  constructor(private backendService: BackendService) {
  }

  ngOnInit() {

  }


  setAprovedStatus() {
    this.lease.status = "PENDING";
    this.statusChanged = true;
    this.approvePrivateCustomerStatus()
    // return true;
  }

  setDeniedStatus() {
    this.lease.status = "PENDING";
    this.statusChanged = true;
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


}
