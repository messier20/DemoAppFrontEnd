import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BusinessCustomerPersonalFormComponent} from './business-customer-personal-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {MatDialogModule} from '@angular/material';
import {PrivateformComponent} from '../privateform/privateform.component';
import {PrivateCustomerPersonalFormComponent} from '../private-customer-personal-form/private-customer-personal-form.component';
import {DisplayFormComponent} from '../display-form/display-form.component';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';

describe('BusinessCustomerPersonalFormComponent', () => {
  let component: BusinessCustomerPersonalFormComponent;
  let fixture: ComponentFixture<BusinessCustomerPersonalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessCustomerPersonalFormComponent, PrivateformComponent, PrivateCustomerPersonalFormComponent, DisplayFormComponent],
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
    fixture = TestBed.createComponent(BusinessCustomerPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
