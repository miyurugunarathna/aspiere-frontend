import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  TeacherForm: any = {};
  isSuccessful = false;

  teacher: Teacher = new Teacher();
  
  submitted = false;

  constructor(
    private teacherService: TeacherService,
    private router: Router) {  }

  ngOnInit(): void {
  }

  newTeacher(): void {
    this.submitted = false;
    this.teacher = new Teacher();
  }

  reset() {
     this.teacher.fname = '';
  }

  onSubmit() {
    // alert('onSubmit() method called');
    console.log(this.teacher);
     this.submitted = true;
     this.saveTeacher();
  }

saveTeacher() {
  // alert('Saved')
  this.teacherService.create(this.teacher).subscribe ( data => {
    console.log(data);
      this.isSuccessful = true;
    }, error => console.log(error));
    this.teacher = new Teacher();
    this.router.navigate(['/admin/registrations'])
}

login() {
  this.router.navigate(['/login'])
}

}
