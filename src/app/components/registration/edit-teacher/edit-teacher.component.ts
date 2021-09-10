import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  id: string;
  pid: string;
  fname: string;
  lname: string;
  dob: Date;
  gender: string;
  email: string;
  phone: string;
  password: string;
  qualifications: {
    title: string;
  description: string;
  university: string;
  };
  bank: string;
  branch: string;
  accnum: number;
  approved: string;
  active: string;

  teacher: Teacher;

  constructor(private route: ActivatedRoute,private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacher = new Teacher();

    this.id = this.route.snapshot.params['id'];
    
     this.teacherService.getTeacher(this.id)
       .subscribe(data => {
         console.log(data)
    //     this.teacher = data;
       }, error => console.log(error));
  }

  onSubmit() {
    this.updateTeacher();    
  }

  updateTeacher() {
    this.teacherService.updateTeacher(this.id, this.teacher)
      .subscribe(data => console.log(data), error => console.log(error));
    this.teacher = new Teacher();
    this.router.navigate(['/teachers'])
  }

  discard() {
    this.router.navigate(['/teachers'])
  }

}

// export interface Qualifications {
//   title: string;
//   description: string;
//   university: string;
// }
