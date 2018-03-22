import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {DataStorageService} from './services/data-storage-service.service';
import {BackendService} from './services/backend.service';

import {AppComponent} from './app.component';
import {PrivateCustomerLeasingFormComponent} from './private-customer-leasing-form/private-customer-leasing-form.component';
import {PrivateformComponent} from './privateform/privateform.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {DialogFormComponent, DisplayFormComponent} from './display-form/display-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BusinessCustomerPersonalFormComponent} from './business-customer-personal-form/business-customer-personal-form.component';
import {PrivateCustomerPersonalFormComponent} from './private-customer-personal-form/private-customer-personal-form.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PrivateCustomerLeasingFormComponent,
    PrivateformComponent,
    DisplayFormComponent,
    PrivateCustomerPersonalFormComponent,
    BusinessCustomerPersonalFormComponent,
    DisplayFormComponent,
    DialogFormComponent
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
