import { Injectable } from '@angular/core';
import {LeaseInfoOfPrivate} from "../models/LeaseInfoOfPrivate";

@Injectable()
export class LeaseInfoService {

  private _leaseInfoOfPrivate: LeaseInfoOfPrivate[];


  constructor() { }


  get leaseInfoOfPrivate(): LeaseInfoOfPrivate[] {
    return this._leaseInfoOfPrivate;
  }

  set leaseInfoOfPrivate(value: LeaseInfoOfPrivate[]) {
    this._leaseInfoOfPrivate = value;
  }
}
