import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

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
import {LeasingCalculatorComponent} from './leasing-calculator/leasing-calculator.component';
import {ConfirmedLeasingFormComponent} from './confirmed-leasing-form/confirmed-leasing-form.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PrivateFormComponent,
    CustomerInfoFormComponent,
    DialogFormComponent,
    LeasingCalculatorComponent,
    ConfirmedLeasingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  providers: [DataStorageService, BackendService],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent]
})
export class AppModule {
}
