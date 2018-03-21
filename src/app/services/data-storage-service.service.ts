import {Injectable} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';

@Injectable()
export class DataStorageService {

  leasingModel: LeasingModel;

  constructor() {
    this.leasingModel = new LeasingModel;
  }

  setLeasingModel(givenLeasingModel) {
    this.leasingModel = givenLeasingModel;
  }

  getLeasingModel() {
    return this.leasingModel;
  }

}
