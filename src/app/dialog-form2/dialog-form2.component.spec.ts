import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogForm2Component} from './dialog-form2.component';
import {MatDialogModule} from '@angular/material';
import {AllInformationListComponent} from '../all-information-list/all-information-list.component';
import {LeasingCalculatorComponent} from '../leasing-calculator/leasing-calculator.component';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {BackendService} from '../services/backend.service';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckLeasingStatusComponent} from '../check-leasing-status/check-leasing-status.component';
import {DataStorageService} from '../services/data-storage-service.service';
import {OfficerViewComponent} from '../officer-view/officer-view.component';
import {PrivateFormComponent} from '../privateform/private-form.component';

describe('DialogForm2Component', () => {
  let component: DialogForm2Component;
  let fixture: ComponentFixture<DialogForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeasingCalculatorComponent,
        PrivateFormComponent,
        CustomerInfoFormComponent,
        AllInformationListComponent,
        CheckLeasingStatusComponent,
        OfficerViewComponent,
        DialogForm2Component
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
    fixture = TestBed.createComponent(DialogForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
