import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllInformationListComponent} from './all-information-list.component';
import {CheckLeasingStatusComponent} from '../check-leasing-status/check-leasing-status.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeasingCalculatorComponent} from '../leasing-calculator/leasing-calculator.component';
import {AppRoutingModule} from '../app-routing.module';
import {DataStorageService} from '../services/data-storage-service.service';
import {PrivateFormComponent} from '../privateform/private-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';
import {APP_BASE_HREF} from '@angular/common';
import {BackendService} from '../services/backend.service';
import {LeasingModel} from '../models/LeasingModel';
import {BusinessCustomerInfo} from '../models/BusinessCustomerInfo';
import {PrivateCustomerInfo} from '../models/PrivateCustomerInfo';
import {OfficerViewComponent} from '../officer-view/officer-view.component';

describe('AllInformationListComponent', () => {
  let component: AllInformationListComponent;
  let fixture: ComponentFixture<AllInformationListComponent>;

  const leasingModel = new LeasingModel();
  leasingModel.customerType = 'Private';
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

  const businessCustomerInfo = new BusinessCustomerInfo();
  businessCustomerInfo.name = 'asassass';
  businessCustomerInfo.code = 12312312312;
  businessCustomerInfo.email = '2@2.lt';
  businessCustomerInfo.phoneNumber = '+123123123123';
  businessCustomerInfo.address = 'asdasdads';

  const privateCustomerInfo = new PrivateCustomerInfo();
  privateCustomerInfo.name = 'asassass';
  privateCustomerInfo.lastName = '123123213';
  privateCustomerInfo.code = 12312312312;
  privateCustomerInfo.email = '2@2.lt';
  privateCustomerInfo.phoneNumber = '+123123123123';
  privateCustomerInfo.address = 'asdasdads';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeasingCalculatorComponent,
        PrivateFormComponent,
        CustomerInfoFormComponent,
        AllInformationListComponent,
        CheckLeasingStatusComponent,
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
    fixture = TestBed.createComponent(AllInformationListComponent);
    component = fixture.componentInstance;
    component.leasingModel = leasingModel;
    component.businessCustomerInfo = businessCustomerInfo;
    component.privateCustomerInfo = privateCustomerInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
