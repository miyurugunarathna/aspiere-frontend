import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';

import { StudentListComponent } from './components/studentregistration/student-list/student-list.component';
import { AddStudentComponent } from './components/studentregistration/add-student/add-student.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(module => module.DashboardModule)
  },

  { path: 'students', component: StudentListComponent},
  { path: 'add-student', component: AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
