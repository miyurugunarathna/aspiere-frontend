import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from 'src/app/components/admin-panel/admin-panel.component';
import { ClassComponent } from 'src/app/components/class/class.component';
import { NoticesComponent } from 'src/app/components/notices/notices.component';
import { TpackagesComponent } from 'src/app/components/packages/tpackages/tpackages.component';
import { SubjectComponent } from 'src/app/components/subject/subject.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'registrations', component: AdminPanelComponent },
          { path: 'classes', component: ClassComponent },
          { path: 'subjects', component: SubjectComponent },
          { path: 'notices', component: NoticesComponent },
          { path: 'payment', component: TestComponent },
          { path: 'package', component: TpackagesComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
