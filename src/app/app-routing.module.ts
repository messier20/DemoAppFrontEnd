import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateformComponent} from './privateform/privateform.component';
import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';
import {DisplayFormComponent} from './display-form/display-form.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateformComponent},
  {path: 'customerInfoForm', component: CustomerInfoFormComponent},
  {path: 'displayForm', component: DisplayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
