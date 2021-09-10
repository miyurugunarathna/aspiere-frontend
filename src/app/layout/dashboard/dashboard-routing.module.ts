import { BadgeComponent } from './../../components/badge/badge.component';
import { FreeCardComponent } from './../../components/free-card/free-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { PayConfirmComponent } from 'src/app/components/payment/pay-confirm/pay-confirm.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { ExamsComponent } from 'src/app/components/exams/exams.component';
import { CreateExamComponent } from 'src/app/components/exam/create-exam/create-exam.component';
import { ListallexamComponent } from 'src/app/components/exam/listallexam/listallexam.component';
import { CreateQuizComponent } from 'src/app/components/quiz/create-quiz/create-quiz.component';
import { AddresultComponent } from 'src/app/components/result/addresult/addresult.component';
import { ListResultComponent } from 'src/app/components/result/list-result/list-result.component';
import { ListQuizComponent } from 'src/app/components/quiz/list-quiz/list-quiz.component';
import { ViewPaymentComponent } from 'src/app/components/payment/view-payment/view-payment.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { DashboardComponent } from './dashboard.component';
import { AttendExamComponent } from 'src/app/components/view-exam/attend-exam/attend-exam.component';
import { EnrollExamComponent } from 'src/app/components/view-exam/enroll-exam/enroll-exam.component';
import { DisplayAllMarksComponent } from 'src/app/components/view-exam/display-all-marks/display-all-marks.component';
import { AddStudentComponent } from 'src/app/components/registration/add-student/add-student.component';
import { StudentListComponent } from 'src/app/components/registration/student-list/student-list.component';
import { ViewStudentComponent } from 'src/app/components/registration/view-student/view-student.component';
import { EditStudentComponent } from 'src/app/components/registration/edit-student/edit-student.component';
import { AddTeacherComponent } from 'src/app/components/registration/add-teacher/add-teacher.component';
import { ViewTeacherComponent } from 'src/app/components/registration/view-teacher/view-teacher.component';
import { EditTeacherComponent } from 'src/app/components/registration/edit-teacher/edit-teacher.component';
import { TeacherListComponent } from 'src/app/components/registration/teacher-list/teacher-list.component';

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
          { path: 'exams',component:ExamsComponent},
          { path: 'exams/create-exam/:teacherID',component:CreateExamComponent},
          { path: 'exams/listallexam/:teacherID',component:ListallexamComponent},
          { path: 'exams/create-quiz/:teacherID',component:CreateQuizComponent},
          { path: 'exams/list-quiz/:teacherID',component:ListQuizComponent},
          { path: 'exams/addresult/:teacherID',component:AddresultComponent},
          { path: 'exams/list-result/:teacherID',component:ListResultComponent},
          { path: 'enroll-exam',component:EnrollExamComponent},
          { path: 'enroll-exam/attend-exam/:key/:id',component:AttendExamComponent},
          { path: 'exams/display-all-marks/:key',component:DisplayAllMarksComponent},
          { path: 'badge', component: BadgeComponent },
          { path: 'free-card', component: FreeCardComponent},
          { path: 'payment/view', component: ViewPaymentComponent },
          { path: 'fees', component: FeesComponent },
          { path: 'students', component: StudentListComponent },
          { path: 'add-student', component: AddStudentComponent },
          { path: 'view-student', component: ViewStudentComponent},
          { path: 'edit-student', component: EditStudentComponent},
          { path: 'teachers', component: TeacherListComponent},
          { path: 'add-teacher', component: AddTeacherComponent },
          { path: 'view-teacher', component: ViewTeacherComponent},
          { path: 'edit-teacher', component: EditTeacherComponent}
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
