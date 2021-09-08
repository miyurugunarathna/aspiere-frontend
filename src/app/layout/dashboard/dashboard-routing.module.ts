import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { PayConfirmComponent } from 'src/app/components/payment/pay-confirm/pay-confirm.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { ViewPaymentComponent } from 'src/app/components/payment/view-payment/view-payment.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: TestComponent },
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
