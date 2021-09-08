import { BadgeService } from './services/badge.service';
import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentListComponent } from './components/studentregistration/student-list/student-list.component';
import { AddStudentComponent } from './components/studentregistration/add-student/add-student.component';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { FeeService } from './services/fees/fee.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( [
      {path: 'students', component: StudentListComponent},
      {path: 'add-student', component: AddStudentComponent},
      
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
