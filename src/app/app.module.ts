import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrivateCustomerLeasingFormComponent } from './private-customer-leasing-form/private-customer-leasing-form.component';
// import { ServicesComponent } from './services/services.component';
import { PrivateformComponent } from './privateform/privateform.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PrivateCustomerLeasingFormComponent,
    // ServicesComponent,
    PrivateformComponent,
    // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
