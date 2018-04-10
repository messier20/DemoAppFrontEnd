import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LeasingModel} from '../../models/LeasingModel';
import {BusinessCustomerInfo} from '../../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../../models/PrivateCustomerInfo';
import {DataStorageService} from '../../services/data-storage-service.service';
import {BackendService} from '../../services/backend.service';
import {CustomerInfoLabels} from '../../constants/CustomerInfoLabels';
import {LeasingFormLabels} from '../../constants/LeasingFormLabels';
import {DialogFormComponent} from '../../dialog-form/dialog-form';
import {MatDialog, MatSnackBar} from '@angular/material';
import {LeaseInfoOfPrivate} from '../../models/LeaseInfoOfPrivate';
import {LeaseInfoOfBusiness} from '../../models/LeaseInfoOfBusiness';
import {DialogForm2Component} from '../../dialog-form2/dialog-form2.component';


@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
export class ApplicationInfoComponent implements OnInit {


  @Input() leasesInfoOfPrivate: LeaseInfoOfPrivate;
  @Input() leasesInfoOfBusiness: LeaseInfoOfBusiness;
  @Input() leasingModel: LeasingModel;
  @Input() lease;
  @Input() ida;
  @Output() updateApplication = new EventEmitter<Object>();
  @Output() status;
  @Input() names;
  @Input() statusEl;
  @Input() pending;
  @Input() stepIndex;


  @Output() updates: EventEmitter<string> =
    new EventEmitter();

  choice = 'no';
  visible: boolean;
  public isCollapsed = true;


  constructor(private backendService: BackendService,
              private dialog: MatDialog,
              private dataStorage: DataStorageService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {

    if (this.lease.status === 'PENDING') {
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


  isPrivate() {
    if (this.lease.leasingModel.customerType === 'PRIVATE') {
      this.sendToBackendPrivate();
    }
    else {
      this.sendToBackendBusiness();
    }
  }

  openModal(status) {

    console.log('lease before submit', this.lease);
    this.dialog.open(DialogForm2Component, {
      data: {
        status: status
      }
    }).afterClosed().subscribe(status => {
      if (status) {
        this.lease.status = 'APPROVED';
      }
      else if (status === false) {
        this.lease.status = 'DENIED';
      }

      if (status || status === false) {

        console.log('lease after submit', this.lease);

        (<HTMLInputElement>document.getElementById('approved')).disabled = true;
        (<HTMLInputElement>document.getElementById('denied')).disabled = true;

        this.isPrivate();
      }

    });

  }


  sendToBackendPrivate() {

    let postBody = {
      loginModel: this.dataStorage.officerLoginModel,
      leasing: this.lease.leasingModel,
      customer: this.lease.privateCustomerInfo,
      status: this.lease.status,
      idHex: this.lease.id
    };

    this.backendService.updatePrivateCustomerStatus(this.lease.id, postBody)
      .then(data => {
        this.updates.emit(this.lease.id);
      });
    this.openSnackBar("The application moved to " + postBody.status.toLowerCase() + " applications", "close");
  }

  sendToBackendBusiness() {
    let postBody = {
      loginModel: this.dataStorage.officerLoginModel,
      leasing: this.lease.leasingModel,
      customer: this.lease.businessCustomerInfo,
      status: this.lease.status,
      idHex: this.lease.id
    };




    this.backendService.updateBusinessCustomerStatus(this.lease.id, postBody)
      .then(data => {
        this.updates.emit(this.lease.id);
      });
    this.openSnackBar("The application moved to " + postBody.status.toLowerCase() + " part", "close");

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

}
