import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './components/registration/student-list/student-list.component';
import { AddStudentComponent } from './components/registration/add-student/add-student.component';
import { ViewStudentComponent } from './components/registration/view-student/view-student.component';
import { EditStudentComponent } from './components/registration/edit-student/edit-student.component';
import { AddTeacherComponent } from './components/registration/add-teacher/add-teacher.component';
import { ViewPaymentComponent } from './components/payment/view-payment/view-payment.component';
import { BadgeComponent } from './components/badge/badge.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(module => module.DashboardModule)
  },

  { path: 'students', component: StudentListComponent},
  { path: 'add-student', component: AddStudentComponent},
  { path: 'view-student/:id', component: ViewStudentComponent},
  { path: 'update-student/:id', component: EditStudentComponent},
  { path: 'add-teacher', component: AddTeacherComponent},
  { path: 'view-payment', component: ViewPaymentComponent},
  { path: 'badge', component: BadgeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
