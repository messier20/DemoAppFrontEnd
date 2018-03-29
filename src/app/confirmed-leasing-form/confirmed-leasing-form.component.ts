import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../services/data-storage-service.service';
import {BackendService} from '../services/backend.service';

@Component({
  selector: 'app-confirmed-leasing-form',
  templateUrl: './confirmed-leasing-form.component.html',
  styleUrls: ['./confirmed-leasing-form.component.css']
})
export class ConfirmedLeasingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
