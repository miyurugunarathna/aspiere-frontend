import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Class } from 'src/app/models/class/class';
import { ClassService } from 'src/app/services/class/class.service';

@Component({
  selector: 'app-teacherclass',
  templateUrl: './teacherclass.component.html',
  styleUrls: ['./teacherclass.component.css']
})
export class TeacherclassComponent implements OnInit {
  public classes: Class[] = [];
  public classOne: Class = new Class;
  public addMessage: any;
  public delID: any;

  constructor(private classService:ClassService, private router:Router) {
  }

  ngOnInit(): void {

    console.log(this.classOne);
    this.getClasses();
  }

  public onDismiss(dismisEle: string): void {
    let inNoClose = document.getElementById(dismisEle);
    if(inNoClose?.style.display === 'block') {
      inNoClose.style.display = 'none';
      this.addMessage = '';
    }
  }

  public getClasses(): void {
    this.classService.getClasses().subscribe(
      (response: Class[]) => {
        this.classes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getClass(id: string): void {
    this.classService.getClass(id).subscribe(
      (response: Class) => {
        console.log(response);
        this.classOne = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public addClass(addClassForm: NgForm): void {
    this.classService.addClass(addClassForm.value).subscribe(
      (response: string) => {
        console.log(response);
        addClassForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getClasses();
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

  public deleteClass(id: string): void {
    this.onDismiss('deleteConfime');
    this.classService.deleteClass(id).subscribe(
      (response: string) => {
        console.log(response);
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getClasses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}