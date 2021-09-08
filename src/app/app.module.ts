import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentListComponent } from './components/registration/student-list/student-list.component';
import { AddStudentComponent } from './components/registration/add-student/add-student.component';
import { AddTeacherComponent } from './components/registration/add-teacher/add-teacher.component';
import { TestComponent } from './components/test/test.component';
import { ViewPaymentComponent } from './components/payment/view-payment/view-payment.component';
import { BadgeComponent } from './components/badge/badge.component';
import { EditStudentComponent } from './components/registration/edit-student/edit-student.component';
import { ViewStudentComponent } from './components/registration/view-student/view-student.component';
import { FeesComponent } from './components/fees/fees.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    ViewStudentComponent,
    EditStudentComponent,
    AddTeacherComponent,
    ViewPaymentComponent,
    BadgeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
      {path: 'students', component: StudentListComponent},
      {path: 'add-student', component: AddStudentComponent},
      
      {path: 'edit-student', component: EditStudentComponent},
      {path: 'view-student', component: ViewStudentComponent},
      {path: 'add-teacher', component: AddTeacherComponent},
      {path: 'view-payment', component:ViewPaymentComponent},
      {path: 'badge', component: BadgeComponent},
      {path: 'fee', component: FeesComponent},
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
