import { BadgeComponent } from './../../components/badge/badge.component';
import { FreeCardComponent } from './../../components/free-card/free-card.component';
import { NgModule, Component } from '@angular/core';
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
import { LoginComponent } from 'src/app/components/login/login/login.component';
import { TpackagesComponent } from 'src/app/components/packages/tpackages/tpackages.component';
import { NoticesComponent } from 'src/app/components/notices/notices.component';
import { CreateNoticeComponent } from 'src/app/components/notice/create-notice/create-notice.component';
import { ListNoticeComponent } from 'src/app/components/notice/list-notice/list-notice.component';
import { StudentchatComponent } from 'src/app/components/chat/studentchat/studentchat.component';
import { TeacherchatComponent } from 'src/app/components/chat/teacherchat/teacherchat.component';
import { MypackageComponent } from 'src/app/components/packages/mypackage/mypackage.component';
import { ChangepackageComponent } from 'src/app/components/packages/changepackage/changepackage.component';
import { ClassComponent } from 'src/app/components/class/class.component';
import { StudentclassComponent } from 'src/app/components/studentclass/studentclass.component';
import { StudentsubjectComponent } from 'src/app/components/studentsubject/studentsubject.component';
import { StudentcoursesComponent } from 'src/app/components/studentcourses/studentcourses.component';
import { CoursematerialComponent } from 'src/app/components/coursematerial/coursematerial.component';
import { ListquizmarksComponent } from 'src/app/components/quiz/listquizmarks/listquizmarks.component';
import { ListassignmentmarksComponent } from 'src/app/components/quiz/listassignmentmarks/listassignmentmarks.component';
import { Dashboard1Component } from 'src/app/components/dashboard/dashboard1/dashboard1.component';
import { ListallenquiriesComponent } from 'src/app/components/notice/listallenquiries/listallenquiries.component';
import { GradingComponent } from 'src/app/components/Grading/grading/grading.component';
import { ListStudentResultComponent } from 'src/app/components/result/list-student-result/list-student-result.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'payment', component: PaymentComponent },
          { path: 'exams',component:ExamsComponent},
          { path: 'grading',component:GradingComponent},
          { path: 'exams/create-exam/:teacherID',component:CreateExamComponent},
          { path: 'exams/listallexam/:teacherID',component:ListallexamComponent},
          { path: 'exams/create-quiz/:teacherID',component:CreateQuizComponent},
          { path: 'exams/list-quiz/:teacherID',component:ListQuizComponent},
          { path: 'exams/addresult/:teacherID',component:AddresultComponent},
          { path: 'list-result/:teacherID',component:ListResultComponent},
          { path: 'exams/listquizmarks',component:ListquizmarksComponent},
          { path: 'exams/liststudentresult',component:ListStudentResultComponent},
          { path: 'exams/listassignmentmarks/:teacherID',component:ListassignmentmarksComponent},
          { path: 'enroll-exam',component:EnrollExamComponent},
          { path: 'enroll-exam/attend-exam/:key/:id',component:AttendExamComponent},
          { path: 'exams/display-all-marks/:key/:id',component:DisplayAllMarksComponent},
          { path: 'dashboard/dashboard1',component:Dashboard1Component},
          { path: 'badge', component: BadgeComponent },
          { path: 'free-card', component: FreeCardComponent},
          { path: 'payment/view', component: ViewPaymentComponent },
          { path: 'fees', component: FeesComponent },
          { path: 'student/all', component: StudentListComponent },
          { path: 'student/add', component: AddStudentComponent },
          { path: 'student/view', component: ViewStudentComponent},
          { path: 'student/edit', component: EditStudentComponent},
          { path: 'teacher/all', component: TeacherListComponent},
          { path: 'teacher/add', component: AddTeacherComponent },
          { path: 'teacher/view', component: ViewTeacherComponent},
          { path: 'teacher/edit', component: EditTeacherComponent},
          { path: 'payConfirm', component: PayConfirmComponent},
          { path: 'packages', component: TpackagesComponent },
          { path: 'notices',component:NoticesComponent},
          { path: 'notices/create-notice',component:CreateNoticeComponent},
          { path: 'notices/list-notice',component:ListNoticeComponent},
          { path: 'notices/listallenquiries',component:ListallenquiriesComponent},
          { path: 'studentchat/:sid',component:StudentchatComponent},
          { path: 'teacherchat/:tid',component:TeacherchatComponent},
          { path: 'mypackage', component: MypackageComponent },
          { path: 'changepackage', component: ChangepackageComponent },
          { path: 'studentclass', component: StudentclassComponent },
          { path: 'studentsubject', component: StudentsubjectComponent },
          { path: 'studentcourses', component: StudentcoursesComponent },
          { path: 'coursematerial', component: CoursematerialComponent },
          { path: 'classes', component: ClassComponent },
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
