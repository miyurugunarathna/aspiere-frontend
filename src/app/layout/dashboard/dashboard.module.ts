import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TeachercourseviewComponent } from 'src/app/components/teachercourseview/teachercourseview.component';
import { SubjectComponent } from 'src/app/components/subject/subject.component';
import { ClassComponent } from 'src/app/components/class/class.component';
import { CoursesComponent } from 'src/app/components/courses/courses.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SubjectComponent,
    TeachercourseviewComponent,
    ClassComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    
  ]
})
export class DashboardModule { }
