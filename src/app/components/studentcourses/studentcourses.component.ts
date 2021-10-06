import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses/courses';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-studentcourses',
  templateUrl: './studentcourses.component.html',
  styleUrls: ['./studentcourses.component.css']
})
export class StudentcoursesComponent implements OnInit {
  public courses: Courses[] = [];
  public coursesOne: Courses = new Courses;
  public addMessage: any;
  public delID: any;

  constructor(private coursesService:CoursesService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.coursesOne);
    this.getCourses();
  }

  public onDismiss(dismisEle: string): void {
    let inNoClose = document.getElementById(dismisEle);
    if(inNoClose?.style.display === 'block') {
      inNoClose.style.display = 'none';
      this.addMessage = '';
    }
  }

  public getCourses(): void {
    this.coursesService.getCourses().subscribe(
      (response: Courses[]) => {
        this.courses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getCourse(id: string): void {
    this.coursesService.getCourse(id).subscribe(
      (response: Courses) => {
        console.log(response);
        this.coursesOne = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public addCourse(addCoursesForm: NgForm): void {
    this.coursesService.addCourse(addCoursesForm.value).subscribe(
      (response: string) => {
        console.log(response);
        addCoursesForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateCourse(updateCoursesForm: NgForm, id: string): void {
    this.coursesService.updateCourse(updateCoursesForm.value, id).subscribe(
      (response: string) => {
        console.log(response);
        updateCoursesForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.coursesOne = new Courses;
        this.getCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteConfime(id: string): void {
    let deleteConfime = document.getElementById('deleteConfime');
    if(deleteConfime?.style.display) {
      deleteConfime.style.display = 'block';
    }
    this.delID = id;
    console.log(deleteConfime);
  }

  public deleteCourse(id: string): void {
    this.onDismiss('deleteConfime');
    this.coursesService.deleteCourse(id).subscribe(
      (response: string) => {
        console.log(response);
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getCourses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
}
