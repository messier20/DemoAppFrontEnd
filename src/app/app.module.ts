import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import {BackendService} from './services/backend.service';
import {AppComponent} from './app.component';
import {PrivateFormComponent} from './privateform/private-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  // MatDatepickerModule, MatDialogModule, MatExpansionPanel, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatMenuModule,
  MatSelectModule, MatTabLabel, MatPaginatorModule, MatTableModule,
  MatTabsModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DataStorageService} from './services/data-storage-service.service';

import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {DialogFormComponent} from './dialog-form/dialog-form';
import {LeasingCalculatorComponent} from './leasing-calculator/leasing-calculator.component';
import {AllInformationListComponent} from './all-information-list/all-information-list.component';
import {CheckLeasingStatusComponent} from './check-leasing-status/check-leasing-status.component';
import {OfficerViewComponent} from './officer-view/officer-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationInfoComponent} from './officer-view/application-info/application-info.component';
import {DialogForm2Component} from './dialog-form2/dialog-form2.component';
import { OfficerLoginComponent } from './officer-login/officer-login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {FlexLayoutModule} from '@angular/flex-layout';
// import { SideNavComponent } from './side-nav/side-nav.component';
import {MediaMatcher} from "@angular/cdk/layout";
import { MatThemingComponent } from './mat-theming/mat-theming.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {SideNavComponent} from "./side-nav/side-nav.component";
import { HomePageComponent } from './home-page/home-page.component';



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
    DialogForm2Component,
    SideNavComponent,
    MatThemingComponent,
    OfficerLoginComponent,
    ScheduleComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
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
    MatGridListModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    // ChangeDetectorRefModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatSelectModule,
    FlexLayoutModule,

    NgbModule.forRoot()
  ],
  providers: [DataStorageService, BackendService, AuthService, AuthGuardService, MediaMatcher],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent, DialogForm2Component]
})
export class AppModule {
}
