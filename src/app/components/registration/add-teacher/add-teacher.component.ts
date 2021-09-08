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

  teacher: Teacher = {
    id: '',
    pid: '',
    fname: '',
    lname: '',
    dob: new Date("0/0/00"),
    gender: '',
    email: '',
    phone: '',
    password: '',
    qualifications: {
      title: '',
      description: '',
      university: '',
    },
    bank: '',
    branch: '',
    accnum: 0,
  };
  
  submitted = false;

  constructor(
    private personService: TeacherService,
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
     console.log(this.teacher);
     this.submitted = true;
     this.saveTeacher();
  }

saveTeacher() {
  alert('Saved')
  this.personService.create(this.teacher).subscribe ( data =>
    console.log(data), error => console.log(error));
    this.teacher = new Teacher();
    this.router.navigate(['/teachers'])
}

}
