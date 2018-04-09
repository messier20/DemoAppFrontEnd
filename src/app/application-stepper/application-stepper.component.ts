import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';

@Component({
  selector: 'app-application-stepper',
  templateUrl: './application-stepper.component.html',
  styleUrls: ['./application-stepper.component.css']
})
export class ApplicationStepperComponent implements OnInit {

  stepOneComplete = false;

  constructor(private dataService: DataStorageService) {
    this.stepOneComplete = false;
  }

  customerType;

  ngOnInit() {
  }

  toSecondStep() {
    this.stepOneComplete = true;
    this.stepOneComplete = true;
    this.customerType = this.dataService.getLeasingModel().customerType;
    document.getElementById('toSecondStep').click();
    document.getElementById('toSecondStep').click();

  }

  toFirstStep() {
    document.getElementById('toFirstStep').click();
    this.stepOneComplete = false;
  }

}
