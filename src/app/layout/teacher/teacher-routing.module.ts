import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from 'src/app/components/badge/badge.component';
import { CoursesComponent } from 'src/app/components/courses/courses.component';
import { CreateExamComponent } from 'src/app/components/exam/create-exam/create-exam.component';
import { ListallexamComponent } from 'src/app/components/exam/listallexam/listallexam.component';
import { ExamsComponent } from 'src/app/components/exams/exams.component';
import { FeesComponent } from 'src/app/components/fees/fees.component';
import { FreeCardComponent } from 'src/app/components/free-card/free-card.component';
import { ListNoticeComponent } from 'src/app/components/notice/list-notice/list-notice.component';
import { MypackageComponent } from 'src/app/components/packages/mypackage/mypackage.component';
import { CreateQuizComponent } from 'src/app/components/quiz/create-quiz/create-quiz.component';
import { ListQuizComponent } from 'src/app/components/quiz/list-quiz/list-quiz.component';
import { AddresultComponent } from 'src/app/components/result/addresult/addresult.component';
import { ListResultComponent } from 'src/app/components/result/list-result/list-result.component';
import { TeacherclassComponent } from 'src/app/components/teacherclass/teacherclass.component';
import { TeachercourseviewComponent } from 'src/app/components/teachercourseview/teachercourseview.component';
import { TeachersubjectComponent } from 'src/app/components/teachersubject/teachersubject.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { AttendExamComponent } from 'src/app/components/view-exam/attend-exam/attend-exam.component';
import { DisplayAllMarksComponent } from 'src/app/components/view-exam/display-all-marks/display-all-marks.component';
import { EnrollExamComponent } from 'src/app/components/view-exam/enroll-exam/enroll-exam.component';
import { TeacherComponent } from './teacher.component';
import { ListquizmarksComponent } from 'src/app/components/quiz/listquizmarks/listquizmarks.component';
import { ListassignmentmarksComponent } from 'src/app/components/quiz/listassignmentmarks/listassignmentmarks.component';
import { Dashboard1Component } from 'src/app/components/dashboard/dashboard1/dashboard1.component';
import { GradingComponent } from 'src/app/components/Grading/grading/grading.component';
import { TeacherchatComponent } from 'src/app/components/chat/teacherchat/teacherchat.component';
import { ClassComponent } from 'src/app/components/class/class.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'classes', component: ClassComponent },
          { path: 'fees', component: FeesComponent },
          { path: 'teacherclass', component: TeacherclassComponent },
          { path: 'teachersubject', component: TeachersubjectComponent },
          { path: 'courses', component: CoursesComponent },
          { path: 'teachercourseview', component: TeachercourseviewComponent },  
          { path: 'exams', component: ExamsComponent },
          { path: 'grading',component:GradingComponent},
          { path: 'exams/create-exam/:teacherID',component:CreateExamComponent},
          { path: 'exams/listallexam/:teacherID',component:ListallexamComponent},
          { path: 'exams/create-quiz/:teacherID',component:CreateQuizComponent},
          { path: 'exams/list-quiz/:teacherID',component:ListQuizComponent},
          { path: 'exams/listquizmarks',component:ListquizmarksComponent},
          { path: 'dashboard/dashboard1',component:Dashboard1Component},
          { path: 'exams/listassignmentmarks/:teacherID',component:ListassignmentmarksComponent},
          { path: 'exams/addresult/:teacherID',component:AddresultComponent},
          { path: 'exams/list-result/:teacherID',component:ListResultComponent},
          { path: 'enroll-exam',component:EnrollExamComponent},
          { path: 'enroll-exam/attend-exam/:key/:id',component:AttendExamComponent},
          { path: 'exams/display-all-marks/:key/:id',component:DisplayAllMarksComponent},
          { path: 'teacherchat/:tid',component:TeacherchatComponent},
          { path: 'badge', component: BadgeComponent },
          { path: 'free-card', component: FreeCardComponent},
          { path: 'payment', component: TestComponent },
          { path: 'package', component: MypackageComponent },
          { path: 'notices',component:ListNoticeComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
