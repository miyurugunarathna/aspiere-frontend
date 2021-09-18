import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdminSideComponent } from './components/sidebar/admin-side/admin-side.component';
import { TeacherSideComponent } from './components/sidebar/teacher-side/teacher-side.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminSideComponent,
    TeacherSideComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminSideComponent,
    TeacherSideComponent,
  ]
})
export class SharedModule { }
