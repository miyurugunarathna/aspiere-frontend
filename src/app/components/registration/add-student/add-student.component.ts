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

  imgSrc: string = '';
  imgURL: any;

  AddStudentForm: any = {};
  isSuccessful = false;

  student: Student = new Student();
  submitted = false;

  
  constructor(
    private studentService: StudentService,
    private router: Router) {
  }

  ngOnInit(): void {

  }

  onImageChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = (event: any) => {
        this.imgURL = event.target.result;
        this.imgSrc = reader.result as string;
        //this.AddStudentForm.patchValue({
        //  imgSrc: reader.result
        //})
      }
      reader.readAsDataURL
    }
  }
  
  onSubmit() {
    console.log(this.student);
    this.submitted = true;
    this.saveStudent();
  }

  saveStudent() {
    alert('Saved')
    this.studentService.create(this.student).subscribe ( data => {
      console.log(data);
      this.isSuccessful = true;
    }, error => console.log(error));
      this.student = new Student();
      this.router.navigate(['/login'])
  }

  login() {
    this.router.navigate(['/login'])
  }

}
