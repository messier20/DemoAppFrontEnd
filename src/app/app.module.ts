import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { PrivateCustomerLeasingFormComponent } from './private-customer-leasing-form/private-customer-leasing-form.component';
import { PrivateformComponent } from './privateform/privateform.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DataStorageService } from './services/data-storage-service.service';
// import {BusinessCustomerPersonalFormComponent} from './business-customer-personal-form/business-customer-personal-form.component';
// import {PrivateCustomerPersonalFormComponent} from './private-customer-personal-form/private-customer-personal-form.component';
import {DisplayFormComponent} from './display-form/display-form.component';
import {DialogFormComponent} from './display-form/dialog-form/dialog-form';


@NgModule({
  declarations: [
    AppComponent,
    // PrivateCustomerLeasingFormComponent,
    PrivateformComponent,
    DisplayFormComponent,
    // PrivateCustomerPersonalFormComponent,
    // BusinessCustomerPersonalFormComponent,
    DialogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent],
  entryComponents: [DisplayFormComponent, DialogFormComponent]
})
export class AppModule { }
