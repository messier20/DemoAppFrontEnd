import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCustomerPersonalFormComponent } from './private-customer-personal-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrivateCustomerLeasingFormComponent} from '../private-customer-leasing-form/private-customer-leasing-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {PrivateformComponent} from '../privateform/privateform.component';
import {BusinessCustomerPersonalFormComponent} from '../business-customer-personal-form/business-customer-personal-form.component';
import {AppRoutingModule} from '../app-routing.module';
import {DisplayFormComponent} from '../display-form/display-form.component';
import {RouterModule} from '@angular/router';

describe('PrivateCustomerPersonalFormComponent', () => {
  let component: PrivateCustomerPersonalFormComponent;
  let fixture: ComponentFixture<PrivateCustomerPersonalFormComponent>;

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
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCustomerPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
