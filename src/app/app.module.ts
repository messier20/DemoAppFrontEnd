import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrivateCustomerLeasingFormComponent } from './private-customer-leasing-form/private-customer-leasing-form.component';
// import { ServicesComponent } from './services/services.component';
import { PrivateformComponent } from './privateform/privateform.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {DisplayFormComponent} from './display-form/display-form.component';
// import {DisplayForm} from './display-form/display-form';


@NgModule({
  declarations: [
    AppComponent,
    PrivateCustomerLeasingFormComponent,
    // ServicesComponent,
    PrivateformComponent,
    DisplayFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
