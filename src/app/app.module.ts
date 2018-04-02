import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';

import {BackendService} from './services/backend.service';
import {AppComponent} from './app.component';
import {PrivateFormComponent} from './privateform/private-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatDialogModule, MatExpansionPanel, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatNativeDateModule, MatSelectModule, MatTabLabel,
  MatTabsModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatButtonModule} from '@angular/material/button';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DataStorageService} from './services/data-storage-service.service';

import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {DialogFormComponent} from './dialog-form/dialog-form';
import {LeasingCalculatorComponent} from './leasing-calculator/leasing-calculator.component';
import { AllInformationListComponent } from './all-information-list/all-information-list.component';
import {CheckLeasingStatusComponent} from "./check-leasing-status/check-leasing-status.component";
import {OfficerViewComponent} from "./officer-view/officer-view.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ApplicationInfoComponent } from './officer-view/application-info/application-info.component';
import { DialogForm2Component } from './dialog-form2/dialog-form2.component';



@NgModule({
  declarations: [
    AppComponent,
    LeasingCalculatorComponent,
    PrivateFormComponent,
    CustomerInfoFormComponent,
    DialogFormComponent,
    LeasingCalculatorComponent,
    CheckLeasingStatusComponent,
    AllInformationListComponent,
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
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatGridListModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  providers: [DataStorageService, BackendService],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent, DialogForm2Component]
})
export class AppModule {
}
