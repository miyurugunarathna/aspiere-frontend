import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  sid = '';
  
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
    this.router.navigate(['app/add-student']);
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
