import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getAll().subscribe(data => {
      this.teachers = data;
    });
  }

  addTeacher() {
    this.router.navigate(['teacher/add']);
  }
  
  viewTeacher(id: string) {
    this.router.navigate(['teacher/view', id]);
  }

  editTeacher(id: string) {
    this.router.navigate(['teacher/update', id]);
  }

  deleteTeacher(id: string) {
    this.teacherService.delete(id).subscribe(data => {
      console.log(data);
      this.getTeachers();
    })
  }

  search() {
    // this.s.fname = this.fname.value;
    // this.s.lname = this.lname.value;
    // this.getData(this.s); 
  }

  filterByApproved() {
    
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
