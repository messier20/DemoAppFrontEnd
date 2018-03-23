import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BackendService} from '../services/backend.service';
import {LeasingModel} from '../models/LeasingModel';
import {DataStorageService} from '../services/data-storage-service.service';
import {DialogFormComponent} from './dialog-form/dialog-form';

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
