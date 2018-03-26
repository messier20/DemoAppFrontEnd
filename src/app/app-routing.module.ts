import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivateformComponent} from './privateform/privateform.component';
import {CustomerInfoFormComponent} from './customer-info-form/customer-info-form.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateformComponent},
  {path: 'customerInfoForm', component: CustomerInfoFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
