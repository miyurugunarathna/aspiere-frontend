import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  sid = '';

  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5,10,15];
  
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

  addStudent() {
    this.router.navigate(['add-student']);
  }
  
  viewStudent(id: string) {
    this.router.navigate(['view-student', id]);
  }

  editStudent(id: string) {
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: string) {
    this.studentService.delete(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    })
  }

}
