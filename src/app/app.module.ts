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
import {LeasingCalculatorComponent} from './leasing-calculator/leasing-calculator.component';
// import { CheckLeasingStatusComponent } from './check-leasing-status/check-leasing-status.component';
import { AllInformationListComponent } from './all-information-list/all-information-list.component';
import {CheckLeasingStatusComponent} from "./check-leasing-status/check-leasing-status.component";
// import { CheckLeasingStatusComponent } from './check-leasing-status/check-leasing-status.component';
import {OfficerViewComponent} from "./officer-view/officer-view.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ApplicationInfoComponent } from './officer-view/application-info/application-info.component';
import {LeaseInfoService} from "./services/lease-info.service";
import { DialogForm2Component } from './dialog-form2/dialog-form2.component';


@NgModule({
  declarations: [
    AppComponent,
    PrivateFormComponent,
    CustomerInfoFormComponent,
    DialogFormComponent,
    LeasingCalculatorComponent,
    CheckLeasingStatusComponent,
    AllInformationListComponent,
    // CheckLeasingStatusComponent
    // CheckLeasingStatusComponent,
    // LeasingCalculatorComponent,
    DialogFormComponent,
    OfficerViewComponent,
    ApplicationInfoComponent,
    DialogForm2Component
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
    NgbModule.forRoot()
  ],
  providers: [DataStorageService, BackendService, LeaseInfoService],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent]
})
export class AppModule {
}
