import { FormsModule } from '@angular/forms';
import { BadgeComponent } from './../../components/badge/badge.component';
import { FreeCardComponent } from 'src/app/components/free-card/free-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { TpackagesComponent } from 'src/app/components/packages/tpackages/tpackages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TpackagesComponent,
    BadgeComponent,
    FreeCardComponent,
    FeesComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,

  ]
})
export class DashboardModule { }
