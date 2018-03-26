import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerInfoFormComponent} from './customer-info-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {PrivateFormComponent} from '../privateform/private-form.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';

describe('CustomerInfoFormComponent', () => {
  let component: CustomerInfoFormComponent;
  let fixture: ComponentFixture<CustomerInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerInfoFormComponent, PrivateFormComponent],
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
    fixture = TestBed.createComponent(CustomerInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
