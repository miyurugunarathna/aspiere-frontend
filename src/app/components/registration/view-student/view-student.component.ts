import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  id: number;
  student: Student;

  constructor(private route: ActivatedRoute, private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];
    
    this.studentService.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }
  
  editStudent(id: number) {
    this.router.navigate(['student/update', id]);
  }

  list(){
    this.router.navigate(['student/all']);
  }

}
