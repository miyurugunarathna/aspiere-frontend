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
  public markses:Marks[] =[];

  constructor(private route: ActivatedRoute,private examService:ExamService ,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('key');
      this.examKey=id;
    })
    this.getAllByKey(this.examKey);
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


}
