import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateformComponent } from './privateform/privateform.component';
import {DisplayFormComponent} from './display-form/display-form.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateformComponent},
  {path: 'displayForm', component: DisplayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
