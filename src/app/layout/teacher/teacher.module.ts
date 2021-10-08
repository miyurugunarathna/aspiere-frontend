import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher.component';


@NgModule({
  declarations: [
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class TeacherModule { }
