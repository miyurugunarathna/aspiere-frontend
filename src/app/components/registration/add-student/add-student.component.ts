import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

    student: Student = new Student();
    submitted = false;

    constructor(
      private studentService: StudentService,
      private router: Router) {
    }

    ngOnInit(): void {

    }
  
  onSubmit() {
    console.log(this.student);
    this.submitted = true;
    this.saveStudent();
  }

  saveStudent() {
    alert('Saved')
    this.studentService.create(this.student).subscribe ( data =>
      console.log(data), error => console.log(error));
      this.student = new Student();
      this.router.navigate(['/students'])
  }

}
