import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BackendService} from '../services/backend.service';
import {LeasingModel} from '../models/LeasingModel';
import {DataStorageService} from '../services/data-storage-service.service';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  leasingModel: LeasingModel;

  constructor(public dialog: MatDialog,
              private dataService: DataStorageService,
              private backendService: BackendService) {
  }

  ngOnInit() {
  }

  openDialog() {
    this.leasingModel = this.dataService.getLeasingModel();
    this.sendFormToBackend();

    const dialogRef = this.dialog.open(DialogFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  sendFormToBackend() {
    this.backendService.submitForm(this.leasingModel);
  }
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: 'dialog-form.html',
  styleUrls: ['./dialog-form.css']
})
export class DialogFormComponent {


  leasingModel: LeasingModel;

  data = [
    {heading: 'Customer type', value: 'Private'},
    {heading: 'Asset type', value: 'Vehicle'},
    {heading: 'Car brand', value: 'Audi'},
    {heading: 'Car model', value: 'A4'},
    {heading: 'Manufactured date', value: '1995'},
    {heading: 'Engine power', value: '90kW'},
    {heading: 'Asset price', value: '2000'},
    {heading: 'Advance payment percentage', value: '10%'},
    {heading: 'Advance payment amount', value: '100'},
    {heading: 'Lease period in month', value: '12'},
    {heading: 'Margin', value: '3.2'},
    {heading: 'Contract fee', value: '200EUR default min 3.2%'},
    {heading: 'Payment date', value: '15 or 30'}
  ];

  constructor(private dataService: DataStorageService,
              private backendService: BackendService) {

    this.leasingModel = this.dataService.getLeasingModel();

    this.sendFormToBackend();

    this.data[0].value = this.leasingModel.customerType;
    this.data[1].value = this.leasingModel.assetType;
    this.data[2].value = this.leasingModel.carBrand;
    this.data[3].value = this.leasingModel.carModel;
    this.data[4].value = this.leasingModel.manufacturedDate;
    this.data[5].value = String(this.leasingModel.enginePower);
    this.data[6].value = String(this.leasingModel.assetPrice);
    this.data[7].value = String(this.leasingModel.advancePaymentPercentage);
    this.data[8].value = this.leasingModel.advancePaymentAmount;
    this.data[9].value = String(this.leasingModel.leasePeriodInMonths);
    this.data[10].value = String(this.leasingModel.margin);
    this.data[11].value = this.leasingModel.contractFee;
    this.data[12].value = String(this.leasingModel.paymentDate);
  }

  sendFormToBackend() {
    this.backendService.submitForm(this.leasingModel);
  }
}
