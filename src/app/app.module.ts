import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrivateCustomerLeasingFormComponent } from './private-customer-leasing-form/private-customer-leasing-form.component';
// import { ServicesComponent } from './services/services.component';
import { PrivateformComponent } from './privateform/privateform.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {DialogFormComponent, DisplayFormComponent} from './display-form/display-form.component';
import {PrivateCustomerPersonalFormComponent} from './private-customer-personal-form/private-customer-personal-form.component';
import {BusinessCustomerPersonalFormComponent} from './business-customer-personal-form/business-customer-personal-form.component';
import { DataStorageService } from './services/data-storage-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PrivateCustomerLeasingFormComponent,
    // ServicesComponent,
    PrivateformComponent,
    // ReactiveFormsModule
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
    BrowserAnimationsModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent],
  entryComponents: [DisplayFormComponent, DialogFormComponent]
})
export class AppModule { }
