import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Coursematerial } from 'src/app/models/coursematerial/coursematerial';
import { CoursematerialService } from 'src/app/services/coursematerial/coursematerial.service';

@Component({
  selector: 'app-teachercourseview',
  templateUrl: './teachercourseview.component.html',
  styleUrls: ['./teachercourseview.component.css']
})
export class TeachercourseviewComponent implements OnInit {
  public coursematerials: Coursematerial[] = [];
  public coursematerialOne: Coursematerial = new Coursematerial;
  public addMessage: any;
  public delID: any;

  constructor(private coursematerialService:CoursematerialService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.coursematerialOne);
    this.getCourseTopics();
  }

  public onDismiss(dismisEle: string): void {
    let inNoClose = document.getElementById(dismisEle);
    if(inNoClose?.style.display === 'block') {
      inNoClose.style.display = 'none';
      this.addMessage = '';
    }
  }

  public getCourseTopics(): void {
    this.coursematerialService.getCourseTopics().subscribe(
      (response: Coursematerial[]) => {
        this.coursematerials = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getCourseTopic(id: string): void {
    this.coursematerialService.getCourseTopic(id).subscribe(
      (response: Coursematerial) => {
        console.log(response);
        this.coursematerialOne = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public addCourseTopic(addCoursematerialForm: NgForm): void {
    this.coursematerialService.addCourseTopic(addCoursematerialForm.value).subscribe(
      (response: string) => {
        console.log(response);
        addCoursematerialForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getCourseTopics();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateCourseTopic(updateCoursematerialForm: NgForm, id: string): void {
    this.coursematerialService.updateCourseTopic(updateCoursematerialForm.value, id).subscribe(
      (response: string) => {
        console.log(response);
        updateCoursematerialForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.coursematerialOne = new Coursematerial;
        this.getCourseTopics();
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

  public deleteCourseTopic(id: string): void {
    this.onDismiss('deleteConfime');
    this.coursematerialService.deleteCourseTopic(id).subscribe(
      (response: string) => {
        console.log(response);
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getCourseTopics();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
