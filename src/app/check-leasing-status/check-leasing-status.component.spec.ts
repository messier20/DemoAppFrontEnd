import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckLeasingStatusComponent} from './check-leasing-status.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeasingCalculatorComponent} from '../leasing-calculator/leasing-calculator.component';
import {AllInformationListComponent} from '../all-information-list/all-information-list.component';
import {AppRoutingModule} from '../app-routing.module';
import {DataStorageService} from '../services/data-storage-service.service';
import {PrivateFormComponent} from '../privateform/private-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';
import {APP_BASE_HREF} from '@angular/common';
import {BackendService} from '../services/backend.service';
import {HttpClientModule} from '@angular/common/http';
import {OfficerViewComponent} from '../officer-view/officer-view.component';

describe('CheckLeasingStatusComponent', () => {
  let component: CheckLeasingStatusComponent;
  let fixture: ComponentFixture<CheckLeasingStatusComponent>;

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
    fixture = TestBed.createComponent(CheckLeasingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
