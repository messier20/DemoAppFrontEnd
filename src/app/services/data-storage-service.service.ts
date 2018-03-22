import {Injectable} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';

@Injectable()
export class DataStorageService {


  private leasingModel: LeasingModel;

  setLeasingModel(givenLeasingModel) {
    this.leasingModel = givenLeasingModel;
  }

  getLeasingModel() {
    return this.leasingModel;
  }

}
