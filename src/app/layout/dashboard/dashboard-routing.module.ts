import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { ExamsComponent } from 'src/app/components/exams/exams.component';
import { CreateExamComponent } from 'src/app/components/exam/create-exam/create-exam.component';
import { ListallexamComponent } from 'src/app/components/exam/listallexam/listallexam.component';
import { CreateQuizComponent } from 'src/app/components/quiz/create-quiz/create-quiz.component';
import { AddresultComponent } from 'src/app/components/result/addresult/addresult.component';
import { ListResultComponent } from 'src/app/components/result/list-result/list-result.component';
import { ListQuizComponent } from 'src/app/components/quiz/list-quiz/list-quiz.component';
import { DashboardComponent } from './dashboard.component';
import { AttendExamComponent } from 'src/app/components/view-exam/attend-exam/attend-exam.component';
import { EnrollExamComponent } from 'src/app/components/view-exam/enroll-exam/enroll-exam.component';
import { DisplayAllMarksComponent } from 'src/app/components/view-exam/display-all-marks/display-all-marks.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'payment', component: PaymentComponent },
          {path:'exams',component:ExamsComponent},
          {path:'exams/create-exam/:teacherID',component:CreateExamComponent},
          {path:'exams/listallexam/:teacherID',component:ListallexamComponent},
          {path:'exams/create-quiz/:teacherID',component:CreateQuizComponent},
          {path:'exams/list-quiz/:teacherID',component:ListQuizComponent},
          {path:'exams/addresult/:teacherID',component:AddresultComponent},
          {path:'exams/list-result/:teacherID',component:ListResultComponent},
          {path:'enroll-exam',component:EnrollExamComponent},
          {path:'enroll-exam/attend-exam/:key/:id',component:AttendExamComponent},
          {path:'exams/display-all-marks/:key',component:DisplayAllMarksComponent}
         
          
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
