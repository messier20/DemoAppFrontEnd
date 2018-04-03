import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerInfoFormComponent} from './customer-info-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {PrivateFormComponent} from '../privateform/private-form.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {LeasingModel} from '../models/LeasingModel';
import {BackendService} from '../services/backend.service';
import {LeasingCalculatorComponent} from '../leasing-calculator/leasing-calculator.component';
import {CheckLeasingStatusComponent} from '../check-leasing-status/check-leasing-status.component';
import {AllInformationListComponent} from '../all-information-list/all-information-list.component';
import {OfficerViewComponent} from '../officer-view/officer-view.component';

describe('CustomerInfoFormComponent', () => {
  let component: CustomerInfoFormComponent;
  let fixture: ComponentFixture<CustomerInfoFormComponent>;
  const leasingModel = new LeasingModel();
  leasingModel.customerType = 'Business';
  leasingModel.assetType = 'Vehicle';
  leasingModel.carBrand = 'AUDI';
  leasingModel.carModel = 'A5';
  leasingModel.manufacturedDate = '2018-02-02';
  leasingModel.enginePower = 123;
  leasingModel.assetPrice = 12345;
  leasingModel.advancePaymentPercentage = 10;
  leasingModel.advancePaymentAmount = '1234.50';
  leasingModel.contractFee = '200.00';
  leasingModel.margin = 3.2;
  leasingModel.leasePeriodInMonths = 12;
  leasingModel.paymentDate = 15;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PrivateFormComponent,
        CustomerInfoFormComponent,
        AllInformationListComponent,
        CheckLeasingStatusComponent,
        LeasingCalculatorComponent,
        OfficerViewComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [
        DataStorageService,
        BackendService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoFormComponent);
    component = fixture.componentInstance;
    component.leasingModel = leasingModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read customer type as business', () => {
    expect(component.isCustomerPrivate()).toEqual(false);
  });
});
