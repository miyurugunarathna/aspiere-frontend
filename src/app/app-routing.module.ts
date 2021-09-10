import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './components/registration/student-list/student-list.component';
import { AddStudentComponent } from './components/registration/add-student/add-student.component';
import { ViewStudentComponent } from './components/registration/view-student/view-student.component';
import { EditStudentComponent } from './components/registration/edit-student/edit-student.component';
import { TeacherListComponent } from './components/registration/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './components/registration/add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './components/registration/view-teacher/view-teacher.component';
import { EditTeacherComponent } from './components/registration/edit-teacher/edit-teacher.component';
import { ViewPaymentComponent } from './components/payment/view-payment/view-payment.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(module => module.DashboardModule)
  },

  { path: 'students', component: StudentListComponent},
  { path: 'app/add-student', component: AddStudentComponent},
  { path: 'view-student/:id', component: ViewStudentComponent},
  { path: 'update-student/:id', component: EditStudentComponent},
  { path: 'teachers', component: TeacherListComponent},
  { path: 'app/add-teacher', component: AddTeacherComponent},
  { path: 'view-teacher/:id', component: ViewTeacherComponent},
  { path: 'update-teacher/:id', component: EditTeacherComponent},
  { path: 'view-payment', component: ViewPaymentComponent},
  { path: 'badge', component: BadgeComponent},
  { path: 'quiz', component: CreateQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
