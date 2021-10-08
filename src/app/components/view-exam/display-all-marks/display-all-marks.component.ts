import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Exam } from 'src/app/models/exam';
import { Answer } from 'src/app/models/answer';
import {Marks}  from 'src/app/models/marks';
import { Quiz } from 'src/app/models/quiz';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-display-all-marks',
  templateUrl: './display-all-marks.component.html',
  styleUrls: ['./display-all-marks.component.css']
})
export class DisplayAllMarksComponent implements OnInit {
  examKey="";
  studentid="";
  public markses:Marks[] =[];
  public markses2:Marks[] =[];

  constructor(private route: ActivatedRoute,private examService:ExamService ,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('key');
      this.examKey=id;
    })

    this.route.paramMap.subscribe(params => {
      let nid:any =params.get('id');
      this.studentid=nid;
    })

    this.getAllByKey(this.examKey);
    this.getAllBystudentID(this.studentid);
  }


  
  public getAllByKey(key:String):void{
    this.examService.addMarks(key).subscribe(
      (response:Marks[])=>{
        this.markses = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };



      public getAllBystudentID(key:String):void{
        this.examService.listmarksbystudentid(key).subscribe(
          (response:Marks[])=>{
            this.markses2 = response;
          },
          (error: HttpErrorResponse)=>{
            alert(error.message);
          }
          );
          };
    


}
