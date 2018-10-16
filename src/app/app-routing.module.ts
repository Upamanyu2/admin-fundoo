import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  { path: '', redirectTo: '/admin-login', pathMatch: 'full' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminLoginComponent]