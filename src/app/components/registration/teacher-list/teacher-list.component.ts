import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getAllTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  addTeacher() {
    this.router.navigate(['app/add-teacher']);
  }
  
  viewTeacher(id: string) {
    this.router.navigate(['view-teacher', id]);
  }

  editTeacher(id: string) {
    this.router.navigate(['update-teacher', id]);
  }

  deleteTeacher(id: string) {
    this.teacherService.deleteTeacher(id).subscribe(data => {
      console.log(data);
      this.getTeachers();
    })
  }

}
