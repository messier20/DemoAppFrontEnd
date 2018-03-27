import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateFormComponent} from './privateform/private-form.component';
import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {CheckLeasingStatusComponent} from './check-leasing-status/check-leasing-status.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateFormComponent},
  {path: 'customerInfoForm', component: CustomerInfoFormComponent},
  {path: 'check-leasing-status', component: CheckLeasingStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
