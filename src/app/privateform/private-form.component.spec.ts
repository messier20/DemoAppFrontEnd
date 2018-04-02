import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrivateFormComponent} from './private-form.component';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {CheckLeasingStatusComponent} from '../check-leasing-status/check-leasing-status.component';
import {AllInformationListComponent} from '../all-information-list/all-information-list.component';
import {BackendService} from '../services/backend.service';
import {LeasingCalculatorComponent} from '../leasing-calculator/leasing-calculator.component';
import {OfficerViewComponent} from '../officer-view/officer-view.component';

describe('PrivateFormComponent', () => {
  let component: PrivateFormComponent;
  let fixture: ComponentFixture<PrivateFormComponent>;

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
        FormsModule,
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
    fixture = TestBed.createComponent(PrivateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate AdvancePaymentAmount and ContractFee', () => {
    component.leasingForm.get('assetPrice').setValue(100);
    component.leasingForm.get('advancePaymentPercentage').setValue(10);
    component.calcAdvancePaymentAmount();

    expect(component.leasingForm.get('advancePaymentAmount').value).toEqual('10.00');
    expect(component.leasingForm.get('contractFee').value).toEqual('200.00');
  });

  it('should setMinAssetPrice', () => {
    component.leasingForm.get('customerType').setValue('Business');
    component.setMinAssetPrice();
    expect(component.minAssetPrice).toEqual(10000);

    component.leasingForm.get('customerType').setValue('SomethingElse');
    component.setMinAssetPrice();
    expect(component.minAssetPrice).toEqual(5000);
  });

  it('should selectBrandHandler', () => {
    component.cars = [{make: 'FORD', model: 'FORD MODEL'},
      {make: 'AUDI', model: 'A4'}];
    component.leasingForm.get('carBrand').setValue('FORD');
    component.selectBrandHandler();
    expect(component.model).toEqual('FORD MODEL');
  });
});
