import { FormsModule } from '@angular/forms';
import { BadgeComponent } from './../../components/badge/badge.component';
import { FreeCardComponent } from 'src/app/components/free-card/free-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { ViewPaymentComponent } from 'src/app/components/payment/view-payment/view-payment.component';
import { AddStudentComponent } from 'src/app/components/registration/add-student/add-student.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BadgeComponent,
    FreeCardComponent,
    FeesComponent,
    PaymentComponent,
    ViewPaymentComponent,
    AddStudentComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,

  ]
})
export class DashboardModule { }
