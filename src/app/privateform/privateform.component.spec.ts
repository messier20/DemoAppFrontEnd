import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrivateformComponent} from './privateform.component';
import {PrivateCustomerPersonalFormComponent} from '../private-customer-personal-form/private-customer-personal-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrivateCustomerLeasingFormComponent} from '../private-customer-leasing-form/private-customer-leasing-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {BusinessCustomerPersonalFormComponent} from '../business-customer-personal-form/business-customer-personal-form.component';
import {AppRoutingModule} from '../app-routing.module';
import {DisplayFormComponent} from '../display-form/display-form.component';
import {RouterModule} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';

describe('PrivateformComponent', () => {
  let component: PrivateformComponent;
  let fixture: ComponentFixture<PrivateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateCustomerLeasingFormComponent, BusinessCustomerPersonalFormComponent, PrivateformComponent, PrivateCustomerPersonalFormComponent, DisplayFormComponent],
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
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate AdvancePaymentAmount and ContractFee', () => {
    component.leasingForm.get('assetPrice').setValue(100);
    component.leasingForm.get('advancePaymentPercentage').setValue(10);
    component.calcAdvancePaymentAmountAndContractFee();
    expect(component.leasingForm.get('advancePaymentAmount').value).toEqual('10.00');
    expect(component.leasingForm.get('contractFee').value).toEqual('200.00');
  })
});
