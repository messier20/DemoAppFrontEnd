import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateformComponent } from './privateform/privateform.component';

const routes: Routes = [
  {path: 'privateForm', component: PrivateformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
