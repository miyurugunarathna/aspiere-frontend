import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from 'src/app/components/badge/badge.component';
import { ClassComponent } from 'src/app/components/class/class.component';
import { CreateExamComponent } from 'src/app/components/exam/create-exam/create-exam.component';
import { ListallexamComponent } from 'src/app/components/exam/listallexam/listallexam.component';
import { ExamsComponent } from 'src/app/components/exams/exams.component';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { FreeCardComponent } from 'src/app/components/free-card/free-card.component';
import { ListNoticeComponent } from 'src/app/components/notice/list-notice/list-notice.component';
import { MypackageComponent } from 'src/app/components/packages/mypackage/mypackage.component';
import { CreateQuizComponent } from 'src/app/components/quiz/create-quiz/create-quiz.component';
import { ListQuizComponent } from 'src/app/components/quiz/list-quiz/list-quiz.component';
import { AddresultComponent } from 'src/app/components/result/addresult/addresult.component';
import { ListResultComponent } from 'src/app/components/result/list-result/list-result.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { AttendExamComponent } from 'src/app/components/view-exam/attend-exam/attend-exam.component';
import { DisplayAllMarksComponent } from 'src/app/components/view-exam/display-all-marks/display-all-marks.component';
import { EnrollExamComponent } from 'src/app/components/view-exam/enroll-exam/enroll-exam.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'fees', component: FeesComponent },
          { path: 'classes', component: ClassComponent },
          { path: 'exams', component: ExamsComponent },
          { path: 'exams/create-exam/:teacherID',component:CreateExamComponent},
          { path: 'exams/listallexam/:teacherID',component:ListallexamComponent},
          { path: 'exams/create-quiz/:teacherID',component:CreateQuizComponent},
          { path: 'exams/list-quiz/:teacherID',component:ListQuizComponent},
          { path: 'addresult/:teacherID',component:AddresultComponent},
          { path: 'list-result/:teacherID',component:ListResultComponent},
          { path: 'enroll-exam',component:EnrollExamComponent},
          { path: 'enroll-exam/attend-exam/:key/:id',component:AttendExamComponent},
          { path: 'exams/display-all-marks/:key',component:DisplayAllMarksComponent},
          { path: 'badge', component: BadgeComponent },
          { path: 'free-card', component: FreeCardComponent},
          { path: 'payment', component: TestComponent },
          { path: 'package', component: MypackageComponent },
          { path: 'notices',component:ListNoticeComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
