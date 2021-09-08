import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ViewPaymentComponent } from './components/payment/view-payment/view-payment.component';
import { BadgeComponent } from './components/badge/badge.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(module => module.DashboardModule)
  },


  { path: 'view-payment', component: ViewPaymentComponent},
  { path: 'badge', component: BadgeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
