import { BadgeComponent } from './../../components/badge/badge.component';
import { FreeCardComponent } from './../../components/free-card/free-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { PayConfirmComponent } from 'src/app/components/payment/pay-confirm/pay-confirm.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { ViewPaymentComponent } from 'src/app/components/payment/view-payment/view-payment.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { DashboardComponent } from './dashboard.component';
import { TpackagesComponent } from 'src/app/components/packages/tpackages/tpackages.component';
import { MypackageComponent } from 'src/app/components/packages/mypackage/mypackage.component';
import { ChangepackageComponent } from 'src/app/components/packages/changepackage/changepackage.component';

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
          { path: 'badge', component: BadgeComponent },
          {path : 'free-card', component: FreeCardComponent},
          { path: 'payment/view', component: ViewPaymentComponent },
          { path: 'fees', component: FeesComponent },
          { path: 'packages', component: TpackagesComponent },
          { path: 'mypackage', component: MypackageComponent },
          { path: 'changepackage', component: ChangepackageComponent },
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
