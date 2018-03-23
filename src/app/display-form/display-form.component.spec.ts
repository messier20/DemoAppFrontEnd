import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplayFormComponent} from './display-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CustomerInfoFormComponent} from '../customer-info-form/customer-info-form.component';
import {PrivateformComponent} from '../privateform/privateform.component';
import {BusinessCustomerPersonalFormComponent} from '../business-customer-personal-form/business-customer-personal-form.component';

describe('DisplayFormComponent', () => {
  let component: DisplayFormComponent;
  let fixture: ComponentFixture<DisplayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessCustomerPersonalFormComponent, PrivateformComponent, CustomerInfoFormComponent, DisplayFormComponent],
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
    fixture = TestBed.createComponent(DisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
