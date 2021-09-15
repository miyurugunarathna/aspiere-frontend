import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { DashboardComponent } from './dashboard.component';
import { NoticesComponent } from 'src/app/components/notices/notices.component';
import { CreateNoticeComponent } from 'src/app/components/notice/create-notice/create-notice.component';
import { ListNoticeComponent } from 'src/app/components/notice/list-notice/list-notice.component';
import { StudentchatComponent } from 'src/app/components/chat/studentchat/studentchat.component';
import { TeacherchatComponent } from 'src/app/components/chat/teacherchat/teacherchat.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'payment', component: PaymentComponent },
          {path:'notices',component:NoticesComponent},
          {path:'notices/create-notice',component:CreateNoticeComponent},
          {path:'notices/list-notice',component:ListNoticeComponent},
          {path:'studentchat/:sid',component:StudentchatComponent},
          {path:'teacherchat/:tid',component:TeacherchatComponent}
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
