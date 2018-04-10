import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateFormComponent} from './privateform/private-form.component';
import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {LeasingCalculatorComponent} from './leasing-calculator/leasing-calculator.component';
import {CheckLeasingStatusComponent} from './check-leasing-status/check-leasing-status.component';
import {OfficerViewComponent} from './officer-view/officer-view.component';
import {OfficerLoginComponent} from './officer-login/officer-login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateFormComponent},
  {path: 'customerInfoForm', component: CustomerInfoFormComponent},
  {path: 'leasingCalculatorForm', component: LeasingCalculatorComponent},
  {path: 'officerLogin', component: OfficerLoginComponent},
  {path: 'officerView', component: OfficerViewComponent, canActivate: [AuthGuardService]},
  {path: 'checkLeasingStatus', component: CheckLeasingStatusComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
