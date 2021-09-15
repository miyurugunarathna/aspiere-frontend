import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from 'src/app/components/class/class.component';
import { CoursesComponent } from 'src/app/components/courses/courses.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { StudentenrollcoursesComponent } from 'src/app/components/studentenrollcourses/studentenrollcourses.component';
import { SubjectComponent } from 'src/app/components/subject/subject.component';
import { TeachercourseviewComponent } from 'src/app/components/teachercourseview/teachercourseview.component';


import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'payment', component: PaymentComponent },
          { path: 'subject', component: SubjectComponent },
          { path: 'class', component: ClassComponent },
          { path: 'courses', component: CoursesComponent },
          { path: 'teachercourseview', component: TeachercourseviewComponent },
          { path: 'studentenrollcourses', component: StudentenrollcoursesComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
