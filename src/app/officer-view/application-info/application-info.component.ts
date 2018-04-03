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
import {DialogForm2Component} from "../../dialog-form2/dialog-form2.component";

// import {TextLabels} from "../../models/TextLabels";

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
export class ApplicationInfoComponent implements OnInit {


  @Input() leasesInfoOfPrivate;
  @Input() leasesInfoOfBusiness;
  @Input() lease;
  @Input() ida;
  @Output() updateApplication = new EventEmitter<Object>();
  @Output() status;
  @Input() names;
  @Input() statusEl;
  @Input() pending;
  @Input() stepIndex;



  @Output() updates: EventEmitter <boolean> =
    new EventEmitter();

  statusChanged = false;
  choice = "no";
  visible: boolean;
  public isCollapsed = true;


  constructor(private backendService: BackendService,
              private dialog: MatDialog) {
  }

  ngOnInit() {

    if(this.lease.status==="PENDING"){
      this.visible = true;
    }
    else this.visible = false;
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  // checkStatus(status, choice){
  //   if(status==="PENDING" && choice ==="no") {
  //     console.log("stat", status);
  //     return true;
  //   }
  //   console.log("stat", status);
  //   return false;
  // }




  isPrivate() {
    if (this.lease.leasingModel.customerType === 'Private') {
      this.sendToBackendPrivate();
    }
    else {
      this.sendToBackendBusiness();
    }
  }

  setApprovedStatus() {
    this.lease.status = "APPROVED";
    this.statusChanged = true;


    this.dialog.open(DialogForm2Component, {
      data: {
        status: this.lease.status,
        choice: this.choice
      }


    }).afterClosed().subscribe(data => {
      this.choice = data;
      console.log("choice", this.choice);

      if (this.choice === "APPROVED") {

        (<HTMLInputElement>document.getElementById('approved')).disabled = true;
        (<HTMLInputElement>document.getElementById('denied')).disabled = true;

        this.updates.emit(true);


        this.isPrivate();
        console.log("subscribe working: ${data}", data);

      }
    });

  }

  setDeniedStatus() {
    this.lease.status = "DENIED";
    this.statusChanged = true;

    this.dialog.open(DialogForm2Component, {
      data: {
        status: this.lease.status,
        choice: this.choice
      }
    }).afterClosed().subscribe(data => {
      this.choice = data;
      if (this.choice === "DENIED") {
        (<HTMLInputElement>document.getElementById('approved')).disabled = true;
        (<HTMLInputElement>document.getElementById('denied')).disabled = true;

        this.isPrivate();
      }
    });


  }

  sendToBackendPrivate() {

    let postBody = {
      customerLeasing: DataStorageService.refactorCustomerType(this.lease.leasingModel),
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
  }

  sendToBackendBusiness() {
    let postBody = {
      customerLeasing: DataStorageService.refactorCustomerType(this.lease.leasingModel),
      businessCustomer: this.lease.businessCustomerInfo,
      status: this.lease.status,
      idHex: this.lease.id
    }

    console.log("post body", postBody);
    // this.disabled = true;
    this.backendService.updateBusinessCustomerStatus(this.lease.id, postBody)
      .then(data => {
        this.updateApplication.emit()
      });
  }


}
