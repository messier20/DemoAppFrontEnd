import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateformComponent } from './privateform/privateform.component';
import { PrivateCustomerPersonalFormComponent } from './private-customer-personal-form/private-customer-personal-form.component';
import {BusinessCustomerInfo} from './models/businessCustomerInfo';
import {BusinessCustomerPersonalFormComponent} from './business-customer-personal-form/business-customer-personal-form.component';
import {DisplayFormComponent} from './display-form/display-form.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateformComponent}
  {path: 'privatePersonalForm', component: PrivateCustomerPersonalFormComponent},
  {path: 'businessPersonalForm', component: BusinessCustomerPersonalFormComponent}
  {path: 'displayForm', component: DisplayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
