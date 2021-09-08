import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentListComponent } from './components/studentregistration/student-list/student-list.component';
import { AddStudentComponent } from './components/studentregistration/add-student/add-student.component';
import { ExamsComponent } from './components/exams/exams.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { CreateExamComponent } from './components/exam/create-exam/create-exam.component';
import { ListallexamComponent } from './components/exam/listallexam/listallexam.component';
import { AddresultComponent } from './components/result/addresult/addresult.component';
import { ListResultComponent } from './components/result/list-result/list-result.component';
import { EnrollExamComponent } from './components/view-exam/enroll-exam/enroll-exam.component';
import { AttendExamComponent } from './components/view-exam/attend-exam/attend-exam.component';
import { DisplayAllMarksComponent } from './components/view-exam/display-all-marks/display-all-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    ExamsComponent,
    CreateQuizComponent,
    ListQuizComponent,
    CreateExamComponent,
    ListallexamComponent,
    AddresultComponent,
    ListResultComponent,
    EnrollExamComponent,
    AttendExamComponent,
    DisplayAllMarksComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot( [
      {path: 'students', component: StudentListComponent},
      {path: 'add-student', component: AddStudentComponent},
    ]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
 }
