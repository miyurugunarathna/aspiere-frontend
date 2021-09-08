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

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    ViewStudentComponent,
    EditStudentComponent,
    AddTeacherComponent,
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
