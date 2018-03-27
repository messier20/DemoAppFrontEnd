import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateFormComponent} from './privateform/private-form.component';
import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {LeasingCalculatorComponent} from './leasing-calculator/leasing-calculator.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateFormComponent},
  {path: 'customerInfoForm', component: CustomerInfoFormComponent},
  {path: 'leasingCalculatorForm', component: LeasingCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
