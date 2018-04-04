import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataStorageService} from "../services/data-storage-service.service";
import {BackendService} from "../services/backend.service";
import {LeasingModel} from "../models/LeasingModel";
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {LeasingFormLabels} from "../constants/LeasingFormLabels";
import {LeaseInfoOfPrivate} from "../models/LeaseInfoOfPrivate";
import {LeaseInfoOfBusiness} from "../models/LeaseInfoOfBusiness";


@Component({
  selector: 'app-officer-view',
  templateUrl: './officer-view.component.html',
  styleUrls: ['./officer-view.component.css']
})
export class OfficerViewComponent implements OnInit {

  leases;

  leasesInfoOfPrivate: LeaseInfoOfPrivate[] = [];
  leasesInfoOfBusiness: LeaseInfoOfBusiness[] = [];
  combined: any [] = [];
  id: string[] = [];
  names: any [] = [];
  statusEl: string[] = ['PENDING', 'APPROVED', 'DENIED'];
  pending: any[] = [];
  approved: any[] = [];
  denied: any[] = [];
  testing: any[] = [];
  stepIndex;

  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsedHorizontal = false;

  constructor(private backendService: BackendService,
              private dataStorageService: DataStorageService) {

    this.dataStorageService.deleteAllLeasingData();
  }

  ngOnInit() {
    this.refresh();
  }


  refresh() {
    this.leases = [];
    this.combined = [];
    this.id = [];
    this.leasesInfoOfBusiness = [];
    this.leasesInfoOfPrivate = [];
    this.pending = [];
    this.approved = [];
    this.denied = [];
    this.names = [];

    this.backendService.getAllPrivateUserApplications()
      .then(data => {
          this.leases = data;
          this.leases.forEach(lease => {
            lease.customerLeasing = DataStorageService.refactorCustomerType(lease.customerLeasing);
            this.id.push(lease.idHex);
            this.leasesInfoOfPrivate.push(new LeaseInfoOfPrivate(lease));
          });

          this.getBusiness();
        }
      );
  }


  getBusiness() {


    this.backendService.getAllBusinessUserApplications()
      .then(data => {

        this.leases = data;
        this.leases.forEach(lease => {
          lease.id.date = (lease.id.date).substr(0, 10);
          lease.customerLeasing = DataStorageService.refactorCustomerType(lease.customerLeasing);
          this.id.push(lease.idHex);

          this.leasesInfoOfBusiness.push(new LeaseInfoOfBusiness(lease));

        });
        let a: any = this.leasesInfoOfPrivate;
        let b: any = this.leasesInfoOfBusiness;

        this.leasesInfoOfPrivate.forEach(data => {
          this.names.push(data.privateCustomerInfo.name);
          data.date = (data.date).substr(0, 10);
        });

        this.leasesInfoOfBusiness.forEach(data => {
          data.date = (data.date).substr(0, 10);
          this.names.push(data.businessCustomerInfo.name);
        });

        this.combined = [];
        this.pending = [];

        this.combined = a.concat(b);
        this.combined.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.combined.forEach(comb => {

          if (comb.status === 'PENDING') {
            this.pending.push(comb);
          }
          else if (comb.status === 'APPROVED') {
            this.approved.push(comb);
          }
          else if (comb.status === 'DENIED') {
            this.denied.push(comb);
          }
        })
      });
  }

  step11;
  step12;
  step13;
  step21;
  step22;
  step23;
  step31;
  step32;
  step33;

  panelOpenState: boolean = false;

  setStep11(index: number) {
    this.step11 = index;
  }

  setStep12(index: number) {
    this.step12 = index;
  }

  setStep13(index: number) {
    this.step13 = index;
  }


  setStep21(index: number) {
    this.step21 = index;
  }

  setStep22(index: number) {
    this.step22 = index;
  }

  setStep23(index: number) {
    this.step23 = index;
  }


  setStep31(index: number) {
    this.step31 = index;
  }

  setStep32(index: number) {
    this.step32 = index;
  }

  setStep33(index: number) {
    this.step33 = index;
  }

}

