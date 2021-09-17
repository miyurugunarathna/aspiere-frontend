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
import { LoginComponent } from './components/login/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(module => module.DashboardModule)
  },

  { path: 'student/all', component: StudentListComponent},
  { path: 'student/add', component: AddStudentComponent},
  { path: 'student/view/:id', component: ViewStudentComponent},
  { path: 'student/update/:id', component: EditStudentComponent},
  { path: 'teacher/all', component: TeacherListComponent},
  { path: 'teacher/add', component: AddTeacherComponent},
  { path: 'teacher/view/:id', component: ViewTeacherComponent},
  { path: 'teacher/update/:id', component: EditTeacherComponent},
  { path: 'student/login', component: LoginComponent},
  { path: 'view-payment', component: ViewPaymentComponent},
  { path: 'badge', component: BadgeComponent},
  { path: 'quiz', component: CreateQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
