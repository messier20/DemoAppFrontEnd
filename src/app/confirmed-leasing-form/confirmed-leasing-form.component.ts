import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {BackendService} from '../services/backend.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmed-leasing-form',
  templateUrl: './confirmed-leasing-form.component.html',
  styleUrls: ['./confirmed-leasing-form.component.css']
})
export class ConfirmedLeasingFormComponent implements OnInit {
  customerId: string;

  constructor(private dataService: DataStorageService) { }

  ngOnInit() {
    this.customerId = this.dataService.getCustomerId();
  }
}
