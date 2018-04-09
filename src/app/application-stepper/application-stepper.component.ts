import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';

@Component({
  selector: 'app-application-stepper',
  templateUrl: './application-stepper.component.html',
  styleUrls: ['./application-stepper.component.css']
})
export class ApplicationStepperComponent implements OnInit {

  constructor(private dataService: DataStorageService) {
  }

  customerType;

  ngOnInit() {
  }

  toSecondStep() {
    document.getElementById('toSecondStep').click();
    this.customerType = this.dataService.getLeasingModel().customerType;

  }

  toFirstStep() {
    document.getElementById('toFirstStep').click();
  }

}
