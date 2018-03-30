import {async, inject, TestBed} from '@angular/core/testing';

import {BackendService} from './backend.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';

describe('BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientTestingModule,
        HttpClientModule,
        HttpClient,
        HttpHandler
      ],
      providers: [
        BackendService,
        {provide: APP_BASE_HREF, useValue: '/'}]
    });
  });

  it('should be created', async(inject([BackendService], (service: BackendService) => {
    expect(service).toBeTruthy();
  })));
});
