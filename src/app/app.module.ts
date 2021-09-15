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

import { NoticesComponent } from './components/notices/notices.component';
import { CreateNoticeComponent } from './components/notice/create-notice/create-notice.component';
import { ListNoticeComponent } from './components/notice/list-notice/list-notice.component';
import { StudentchatComponent } from './components/chat/studentchat/studentchat.component';
import { TeacherchatComponent } from './components/chat/teacherchat/teacherchat.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
  
    NoticesComponent,
    CreateNoticeComponent,
    ListNoticeComponent,
    StudentchatComponent,
    TeacherchatComponent,
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
