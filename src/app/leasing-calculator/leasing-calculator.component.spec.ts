import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {LeasingCalculatorComponent} from './leasing-calculator.component';
import {BackendService} from '../services/backend.service';
import {PrivateFormComponent} from '../privateform/private-form.component';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';
import {AllInformationListComponent} from '../all-information-list/all-information-list.component';
import {CheckLeasingStatusComponent} from '../check-leasing-status/check-leasing-status.component';
import {HttpClientModule} from '@angular/common/http';
import {OfficerViewComponent} from '../officer-view/officer-view.component';

describe('LeasingCalculatorComponent', () => {
  let component: LeasingCalculatorComponent;
  let fixture: ComponentFixture<LeasingCalculatorComponent>;

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
        RouterModule,
        HttpClientModule
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
    fixture = TestBed.createComponent(LeasingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate AdvancePaymentAmount and ContractFee', () => {
    component.leasingCalculatorForm.get('assetPrice').setValue(100);
    component.leasingCalculatorForm.get('advancePaymentPercentage').setValue(10);
    component.calcAdvancePaymentAmountAndContractFee();

    expect(component.leasingCalculatorForm.get('advancePaymentAmount').value).toEqual('10.00');
    expect(component.leasingCalculatorForm.get('contractFee').value).toEqual('200.00');
  });

  it('should setMinAssetPrice', () => {
    component.leasingCalculatorForm.get('customerType').setValue('Business');
    component.setMinAssetPrice();
    expect(component.minAssetPrice).toEqual(10000);

    component.leasingCalculatorForm.get('customerType').setValue('SomethingElse');
    component.setMinAssetPrice();
    expect(component.minAssetPrice).toEqual(5000);
  });

});
