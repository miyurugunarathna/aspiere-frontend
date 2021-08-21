import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { ViewPaymentComponent } from 'src/app/components/payment/view-payment/view-payment.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'payment', component: PaymentComponent },
          { path: 'payment/view', component: ViewPaymentComponent },
          { path: 'fees', component: FeesComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
