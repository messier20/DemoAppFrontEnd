import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {BackendService} from './services/backend.service';
import {AppComponent} from './app.component';
import {PrivateFormComponent} from './privateform/private-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DataStorageService} from './services/data-storage-service.service';

import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {DialogFormComponent} from './dialog-form/dialog-form';
import { CheckLeasingStatusComponent } from './check-leasing-status/check-leasing-status.component';


@NgModule({
  declarations: [
    AppComponent,
    PrivateFormComponent,
    CustomerInfoFormComponent,
    DialogFormComponent,
    CheckLeasingStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataStorageService, BackendService],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent]
})
export class AppModule {
}
