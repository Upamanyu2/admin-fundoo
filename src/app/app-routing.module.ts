import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: DashboardComponent  },
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
export const routingComponents = [AdminLoginComponent, DashboardComponent]