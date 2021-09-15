import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeService } from './services/badge.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddTeacherComponent } from './components/registration/add-teacher/add-teacher.component';
import { EditStudentComponent } from './components/registration/edit-student/edit-student.component';
import { ViewStudentComponent } from './components/registration/view-student/view-student.component';
import { StudentListComponent } from './components/studentregistration/student-list/student-list.component';
import { AddStudentComponent } from './components/studentregistration/add-student/add-student.component';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { FeeService } from './services/fees/fee.service';
import { ListallexamComponent } from './components/exam/listallexam/listallexam.component';
import { CreateExamComponent } from './components/exam/create-exam/create-exam.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';
import { AddresultComponent } from './components/result/addresult/addresult.component';
import { ListResultComponent } from './components/result/list-result/list-result.component'; 
import { ExamsComponent } from './components/exams/exams.component';
import { AttendExamComponent } from './components/view-exam/attend-exam/attend-exam.component';
import { DisplayAllMarksComponent } from './components/view-exam/display-all-marks/display-all-marks.component';
import { EnrollExamComponent } from './components/view-exam/enroll-exam/enroll-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    ViewStudentComponent,
    EditStudentComponent,
    AddTeacherComponent,
    ListallexamComponent,
    CreateExamComponent,
    ListQuizComponent,
    CreateQuizComponent,
    AddresultComponent,
    ListResultComponent,
    ExamsComponent,
    AttendExamComponent,
    DisplayAllMarksComponent,
    EnrollExamComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
      {path: 'students', component: StudentListComponent},
      {path: 'add-student', component: AddStudentComponent},
      {path: 'edit-student', component: EditStudentComponent},
      {path: 'view-student', component: ViewStudentComponent},
      {path: 'add-teacher', component: AddTeacherComponent},
    ]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule,
  ],
  providers: [FeeService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
 }
