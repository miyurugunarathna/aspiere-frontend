import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  sid = '';
  
  constructor(private studentService: StudentService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

  addStudent() {
    this.router.navigate(['student/add']);
  }
  
  viewStudent(id: string) {
    this.router.navigate(['student/view', id]);
  }

  editStudent(id: string) {
    this.router.navigate(['student/update', id]);
  }

  deleteStudent(id: string) {
    this.studentService.delete(id).subscribe(data => {
      console.log(data);
      this.getStudents();
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
