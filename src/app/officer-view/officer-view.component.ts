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
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './officer-view.component.html',
  styleUrls: ['./officer-view.component.css']
})
export class OfficerViewComponent implements OnInit {

  leases;

  leasesInfoOfPrivate: LeaseInfoOfPrivate[] = [];
  leasesInfoOfBusiness: LeaseInfoOfBusiness[] = [];
  combined: any [] = [];
  idandDate: string[][] = [[], []];
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
    console.log("reloded");

  }

  // refresh2() {
  //   this.leases.splice(0,this.leases.length);
  //   this.combined.splice(0,this.combined.length);
  //   this.id.splice(0,this.id.length);
  //   this.leasesInfoOfBusiness.splice(0,this.leasesInfoOfBusiness.length);
  //   this.leasesInfoOfPrivate.splice(0,this.leasesInfoOfPrivate.length);
  //   this.pending.splice(0,this.pending.length);
  //   this.approved.splice(0,this.approved.length);
  //   this.denied.splice(0,this.denied.length);
  //   this.names.splice(0,this.names.length);
  //
  //   this.refresh();
  // }

  refresh() {

    // let leasesInfoOfPrivate: LeaseInfoOfPrivate[] = [];
    // let leasesInfoOfBusiness: LeaseInfoOfBusiness[] = [];

    // const index: number = this.leases.indexOf();
    // if (index !== -1) {
    //   this.data.splice(index, 1);
    // }

    // this.leases.splice(0,this.leases.length);
    // this.combined.splice(0,this.combined.length);
    // this.id.splice(0,this.id.length);
    // this.leasesInfoOfBusiness.splice(0,this.leasesInfoOfBusiness.length);
    // this.leasesInfoOfPrivate.splice(0,this.leasesInfoOfPrivate.length);
    // this.pending.splice(0,this.pending.length);
    // this.approved.splice(0,this.approved.length);
    // this.denied.splice(0,this.denied.length);
    // this.names.splice(0,this.names.length);

    console.count('>>> refresh()');
    this.leases = [];
    this.combined = [];
    this.id = [];
    this.leasesInfoOfBusiness = [];
    this.leasesInfoOfPrivate = [];
    this.pending = [];
    this.approved = [];
    this.denied = [];
    this.names = [];

    //
    // this.leases.length = 0;
    // this.combined.length = 0;
    // this.id.length = 0;
    // this.leasesInfoOfBusiness.length = 0;
    // this.leasesInfoOfPrivate.length = 0;
    // this.pending.length = 0;
    // this.approved.length = 0;
    // this.denied.length = 0;
    // this.names.length = 0;


    this.backendService.getAllPrivateUserApplications()
      .then(data => {
          this.leases = data;
          this.leases.forEach(lease => {
            // console.log("lease id", lease.id);
            lease.customerLeasing = DataStorageService.refactorCustomerType(lease.customerLeasing);
            this.id.push(lease.idHex);
            // console.log("lease id2", lease.id.toString());
            this.leasesInfoOfPrivate.push(new LeaseInfoOfPrivate(lease));

            // console.log("all data: ", lease);
            // console.log("array", this.leasesInfoOfPrivate);
            // console.log("id private", this.idandDate);
            // console.log("id", this.id);
          });

          this.getBusiness();
        }
      );
  }



  getBusiness() {


    this.backendService.getAllBusinessUserApplications()
      .then(data => {

        console.count('>>> getAllBusinessUserApplications()');

        this.leases = data;
        this.leases.forEach(lease => {
          // console.log("lease id", lease.id);
          lease.id.date = (lease.id.date).substr(0, 10);
          lease.customerLeasing = DataStorageService.refactorCustomerType(lease.customerLeasing);
          this.id.push(lease.idHex);

          this.leasesInfoOfBusiness.push(new LeaseInfoOfBusiness(lease));

          // console.log("all data: ", lease);
          // console.log("array", this.leasesInfoOfBusiness);
          // console.log("id private and business", this.idandDate);
          // console.log("id", this.id);


        });
        // console.log("all id", this.id);
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
        console.log('combined', this.combined);
        this.combined.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        console.log('combinned after sort', this.combined);

        this.combined.forEach(comb => {

          if (comb.status === 'PENDING') {
            this.pending.push(comb);
            console.log('in pending');
          }
          else if (comb.status === 'APPROVED') {
            this.approved.push(comb);
            console.log('in approved');
          }
          else if (comb.status === 'DENIED') {
            this.denied.push(comb);
          }

        })



      });
  }

  step;
  step2;
  step3;
  panelOpenState: boolean = false;

  setStep(index: number) {
    this.step = index;
  }

  setStep2(index: number) {
    this.step2 = index;
  }

  setStep3(index: number) {
    this.step3 = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}

