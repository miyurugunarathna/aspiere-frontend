import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject/subject';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-teachersubject',
  templateUrl: './teachersubject.component.html',
  styleUrls: ['./teachersubject.component.css']
})
export class TeachersubjectComponent implements OnInit {
  public subject: Subject[] = [];
  public subjectOne: Subject = new Subject;
  public addMessage: any;
  public delID: any;

  constructor(private subjectService:SubjectService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.subjectOne);
    this.getSubjects();
  }

  public onDismiss(dismisEle: string): void {
    let inNoClose = document.getElementById(dismisEle);
    if(inNoClose?.style.display === 'block') {
      inNoClose.style.display = 'none';
      this.addMessage = '';
    }
  }

  public getSubjects(): void {
    this.subjectService.getSubjects().subscribe(
      (response: Subject[]) => {
        this.subject = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public getSubject(id: string): void {
    this.subjectService.getSubject(id).subscribe(
      (response: Subject) => {
        console.log(response);
        this.subjectOne = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public addSubject(addSubjectForm: NgForm): void {
    this.subjectService.addSubject(addSubjectForm.value).subscribe(
      (response: string) => {
        console.log(response);
        addSubjectForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getSubjects();
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

  public deleteSubject(id: string): void {
    this.onDismiss('deleteConfime');
    this.subjectService.deleteSubject(id).subscribe(
      (response: string) => {
        console.log(response);
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getSubjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
