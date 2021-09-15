import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {

  id: string;
  teacher: Teacher;

  constructor(private route: ActivatedRoute, private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit(): void {

    this.teacher = new Teacher();

    this.id = this.route.snapshot.params['id'];
    
     this.teacherService.getTeacher(this.id)
       .subscribe(data => {
         console.log(data)
         //this.teacher = data;
       }, error => console.log(error));
  }
  
  editTeacher(id: string) {
    this.router.navigate(['update-teacher', id]);
  }

  list(){
    this.router.navigate(['teachers']);
  }

}
