import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCustomerLeasingFormComponent } from './private-customer-leasing-form.component';
import {Component} from "@angular/core";
import {PrivateCustomerPersonalFormComponent} from '../private-customer-personal-form/private-customer-personal-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrivateformComponent} from '../privateform/privateform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BusinessCustomerPersonalFormComponent} from '../business-customer-personal-form/business-customer-personal-form.component';
import {AppRoutingModule} from '../app-routing.module';
import {DisplayFormComponent} from '../display-form/display-form.component';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {RouterModule} from '@angular/router';



describe('PrivateCustomerLeasingFormComponent', () => {
  let component: PrivateCustomerLeasingFormComponent;
  let fixture: ComponentFixture<PrivateCustomerLeasingFormComponent>;
//
// @Component({
//   providers: [FORM_PROVIDERS],
//   directives: [FORM_DIRECTIVES]
// })

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
      ]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCustomerLeasingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
