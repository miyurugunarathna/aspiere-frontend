import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentListComponent } from './components/registration/student-list/student-list.component';
import { AddStudentComponent } from './components/registration/add-student/add-student.component';
import { ViewStudentComponent } from './components/registration/view-student/view-student.component';
import { EditStudentComponent } from './components/registration/edit-student/edit-student.component';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { MypackageComponent } from './components/packages/mypackage/mypackage.component';
import { ChangepackageComponent } from './components/packages/changepackage/changepackage.component';
import { CreateExamComponent } from './components/exam/create-exam/create-exam.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { ExamsComponent } from './components/exams/exams.component';
import { EnrollExamComponent } from './components/view-exam/enroll-exam/enroll-exam.component';
import { DisplayAllMarksComponent } from './components/view-exam/display-all-marks/display-all-marks.component';
import { ListResultComponent } from './components/result/list-result/list-result.component';
import { AddresultComponent } from './components/result/addresult/addresult.component';
import { AttendExamComponent } from './components/view-exam/attend-exam/attend-exam.component';
import { TeacherListComponent } from './components/registration/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './components/registration/add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './components/registration/view-teacher/view-teacher.component';
import { EditTeacherComponent } from './components/registration/edit-teacher/edit-teacher.component';
import { LoginComponent } from './components/login/login/login.component';
import { NoticesComponent } from './components/notices/notices.component';
import { CreateNoticeComponent } from './components/notice/create-notice/create-notice.component';
import { ListNoticeComponent } from './components/notice/list-notice/list-notice.component';
import { StudentchatComponent } from './components/chat/studentchat/studentchat.component';
import { TeacherchatComponent } from './components/chat/teacherchat/teacherchat.component';
import { ListallexamComponent } from './components/exam/listallexam/listallexam.component';
import { AdminModule } from './layout/admin/admin.module';
import { TeacherModule } from './layout/teacher/teacher.module';
import { ListquizmarksComponent } from './components/quiz/listquizmarks/listquizmarks.component';
import { ListassignmentmarksComponent } from './components/quiz/listassignmentmarks/listassignmentmarks.component';
import { Dashboard1Component } from './components/dashboard/dashboard1/dashboard1.component';
import { ListallenquiriesComponent } from './components/notice/listallenquiries/listallenquiries.component';
import { GradingComponent } from './components/Grading/grading/grading.component';
import { ListStudentResultComponent } from './components/result/list-student-result/list-student-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MypackageComponent,
    ChangepackageComponent,
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    ViewStudentComponent,
    EditStudentComponent,
    AddTeacherComponent,
    ExamsComponent,
    EnrollExamComponent,
    DisplayAllMarksComponent,
    CreateExamComponent,
    ListallexamComponent,
    AttendExamComponent,
    CreateQuizComponent,
    AddresultComponent,
    ListResultComponent,
    ListQuizComponent,
    TeacherListComponent,
    ViewTeacherComponent,
    EditTeacherComponent,
    LoginComponent,
    NoticesComponent,
    CreateNoticeComponent,
    ListNoticeComponent,
    StudentchatComponent,
    TeacherchatComponent,
    ListquizmarksComponent,
    ListassignmentmarksComponent,
    Dashboard1Component,
    ListallenquiriesComponent,
    GradingComponent,
    ListStudentResultComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
      {path: 'student/all', component: StudentListComponent},
      {path: 'student/add', component: AddStudentComponent},
      {path: 'student/edit', component: EditStudentComponent},
      {path: 'student/view', component: ViewStudentComponent},
      {path: 'teacher/all', component: StudentListComponent},
      {path: 'teacher/add', component: AddTeacherComponent},
      {path: 'teacher/view', component: ViewTeacherComponent},
      {path: 'teacher/edit', component: EditTeacherComponent},
      {path: 'login', component: LoginComponent},
      { path: 'exams',component:ExamsComponent},
      { path: 'exams/create-exam/:teacherID',component:CreateExamComponent},
      { path: 'exams/listallexam/:teacherID',component:ListallexamComponent},
      { path: 'exams/create-quiz/:teacherID',component:CreateQuizComponent},
      { path: 'exams/list-quiz/:teacherID',component:ListQuizComponent},
      { path: 'exams/addresult/:teacherID',component:AddresultComponent},
      { path: 'list-result/:teacherID',component:ListResultComponent},
      { path: 'notices/listallenquiries',component:ListallenquiriesComponent},
      { path: 'enroll-exam',component:EnrollExamComponent},
      { path: 'enroll-exam/attend-exam/:key/:id',component:AttendExamComponent},
      { path: 'exams/display-all-marks/:key',component:DisplayAllMarksComponent}
    ]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule,
    AdminModule,
    TeacherModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
 }
