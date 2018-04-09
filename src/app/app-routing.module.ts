import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateFormComponent} from './privateform/private-form.component';
import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {LeasingCalculatorComponent} from './leasing-calculator/leasing-calculator.component';
import {CheckLeasingStatusComponent} from './check-leasing-status/check-leasing-status.component';
import {OfficerViewComponent} from './officer-view/officer-view.component';
import {ApplicationStepperComponent} from './application-stepper/application-stepper.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateFormComponent},
  {path: 'customerInfoForm', component: CustomerInfoFormComponent},
  {path: 'leasingCalculatorForm', component: LeasingCalculatorComponent},
  {path: 'officerView', component: OfficerViewComponent},
  {path: 'checkLeasingStatus', component: CheckLeasingStatusComponent},
  {path: 'stepper', component: ApplicationStepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
