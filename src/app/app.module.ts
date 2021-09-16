import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeService } from './services/badge.service';
import { NgModule, Component } from '@angular/core';
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
import { FeeService } from './services/fees/fee.service';
import { MypackageComponent } from './components/packages/mypackage/mypackage.component';
import { ChangepackageComponent } from './components/packages/changepackage/changepackage.component';
import { ListallexamComponent } from './components/exam/listallexam/listallexam.component';
import { CreateExamComponent } from './components/exam/create-exam/create-exam.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { ExamsComponent } from './components/exams/exams.component';
import { ListallexamComponent } from './components/exam/listallexam/listallexam.component';
import { ListResultComponent } from './components/result/list-result/list-result.component';
import { AddresultComponent } from './components/result/addresult/addresult.component';
import { AttendExamComponent } from './components/view-exam/attend-exam/attend-exam.component';
import { TeacherListComponent } from './components/registration/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './components/registration/add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './components/registration/view-teacher/view-teacher.component';
import { EditTeacherComponent } from './components/registration/edit-teacher/edit-teacher.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { NoticesComponent } from './components/notices/notices.component';
import { CreateNoticeComponent } from './components/notice/create-notice/create-notice.component';
import { ListNoticeComponent } from './components/notice/list-notice/list-notice.component';
import { StudentchatComponent } from './components/chat/studentchat/studentchat.component';
import { TeacherchatComponent } from './components/chat/teacherchat/teacherchat.component';

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
    RegisterComponent,
    NoticesComponent,
    CreateNoticeComponent,
    ListNoticeComponent,
    StudentchatComponent,
    TeacherchatComponent,
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
      {path: 'register', component: RegisterComponent}

    ]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule,
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
