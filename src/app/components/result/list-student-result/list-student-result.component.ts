import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Enroll } from 'src/app/models/enrolltest';
import { Exam } from 'src/app/models/exam';
import { Quiz } from 'src/app/models/quiz';
import { Result } from 'src/app/models/result';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list-student-result',
  templateUrl: './list-student-result.component.html',
  styleUrls: ['./list-student-result.component.css']
})
export class ListStudentResultComponent implements OnInit {
  sid="S01";
  public result:Result[] =[];

  constructor(private route: ActivatedRoute,private examService:ExamService) { }

  ngOnInit(): void {
    this.getAllByStudentID(this.sid);
  }

  public getAllByStudentID(sid:String):void{
    this.examService.getResultByStudentID(sid).subscribe(
      (response:Result[])=>{
        this.result = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };




}
