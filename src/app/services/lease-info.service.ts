import { Injectable } from '@angular/core';
import {LeaseInfoOfPrivate} from "../models/LeaseInfoOfPrivate";

@Injectable()
export class LeaseInfoService {

  private _leaseInfoOfPrivate: LeaseInfoOfPrivate[];
  // private _leaseInfoOfPrivate2: LeaseInfoOfPrivate;


  constructor() { }


  get leaseInfoOfPrivate(): LeaseInfoOfPrivate[] {
    return this._leaseInfoOfPrivate;
  }

  set leaseInfoOfPrivate(value: LeaseInfoOfPrivate[]) {
    this._leaseInfoOfPrivate = value;
  }

  // get leaseInfoOfPrivate2(): LeaseInfoOfPrivate {
  //   return this._leaseInfoOfPrivate2;
  // }
  //
  // set leaseInfoOfPrivate2(value: LeaseInfoOfPrivate) {
  //   this._leaseInfoOfPrivate2 = value;
  // }
  //
  // get getleaseInfoOfPrivate(): LeaseInfoOfPrivate[] {
  //   return this._leaseInfoOfPrivate;
  // }
  //
  //  set setleaseInfoOfPrivate(value: LeaseInfoOfPrivate[]) {
  //   this._leaseInfoOfPrivate = value;
  // }
}
