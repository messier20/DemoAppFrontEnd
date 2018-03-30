import {async, inject, TestBed} from '@angular/core/testing';

import {BackendService} from './backend.service';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {DataStorageService} from './data-storage-service.service';
import {PrivateFormComponent} from '../privateform/private-form.component';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';
import {AllInformationListComponent} from '../all-information-list/all-information-list.component';
import {LeasingCalculatorComponent} from '../leasing-calculator/leasing-calculator.component';
import {CheckLeasingStatusComponent} from '../check-leasing-status/check-leasing-status.component';

describe('BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeasingCalculatorComponent,
        PrivateFormComponent,
        CustomerInfoFormComponent,
        AllInformationListComponent,
        CheckLeasingStatusComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
      ],
      providers: [
        BackendService,
        DataStorageService,
        {provide: APP_BASE_HREF, useValue: '/'}]
    });
  });

  it('should be created', async(inject([BackendService], (service: BackendService) => {
    expect(service).toBeTruthy();
  })));
});
