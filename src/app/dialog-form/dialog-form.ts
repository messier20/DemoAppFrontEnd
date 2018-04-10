import {Component, Inject} from '@angular/core';
import {BackendService} from '../services/backend.service';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {CustomerInfoLabels} from '../constants/CustomerInfoLabels';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {DataStorageService} from '../services/data-storage-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.html',
  styleUrls: ['./dialog-form.css']
})
export class DialogFormComponent {

  privateCustomer: boolean;
  checkingLeasingStatus: boolean;
  showingUserId: boolean;

  leasingModel: LeasingModel;
  privateCustomerInfo: PrivateCustomerInfo;
  businessCustomerInfo: BusinessCustomerInfo;

  leasingStatus: string;
  receivedUserId: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogFormComponent>,
              private backendService: BackendService,
              private dataService: DataStorageService,
              private router: Router,
              public snackBar: MatSnackBar
  ) {

    this.showingUserId = false;
    this.leasingModel = this.data.leasingModel;
    this.checkingLeasingStatus = this.data.checkingLeasingStatus;
    this.leasingStatus = this.data.leasingStatus;
    this.isCustomerPrivate();
    this.dialogRef.disableClose = true;

    if (this.privateCustomer) {
      this.privateCustomerInfo = this.data.privateInfo;
    } else {
      this.businessCustomerInfo = this.data.businessInfo;
    }
  }

  sendFormToBackend() {
    this.backendService.sendCompletedForm().then(returnedId => {


      const returnedUserIdObject: any = returnedId;
      this.receivedUserId = returnedUserIdObject.id;
      console.log("id", this.receivedUserId);
        if(this.receivedUserId===null) {
          this.showingUserId = false;
          this.openSnackBar('Woops! Something went wrong. Please check your data and try again.', 'Close');

        }else {
          this.showingUserId = true;
          this.dataService.deleteAllLeasingData();
        }
    },
      error=> {
      this.showingUserId = false;
        this.openSnackBar('Woops! Something went wrong. Please check your data and try again.', 'Close');
      });
  }

  private isCustomerPrivate() {
    this.privateCustomer = this.leasingModel.customerType === 'PRIVATE';
  }


  goBack() {
    this.router.navigate(['/customerInfoForm']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000
    });
  }

}
