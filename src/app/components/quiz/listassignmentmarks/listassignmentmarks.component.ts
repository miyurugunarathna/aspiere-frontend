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
  selector: 'app-listassignmentmarks',
  templateUrl: './listassignmentmarks.component.html',
  styleUrls: ['./listassignmentmarks.component.css']
})
export class ListassignmentmarksComponent implements OnInit {

  sid="";
  public result:Result[] =[];

  constructor(private route: ActivatedRoute,private examService:ExamService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('teacherID');
      this.sid=id;
    })
    this.getAllByTeacherID(this.sid);
  }

  public getAllByTeacherID(sid:String):void{
    this.examService.getAllStudents(sid).subscribe(
      (response:Result[])=>{
        this.result = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };


      printReport(): void{
        let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
        let tableSelect = document.getElementById('assignment');
        let tableHtml = tableSelect?.outerHTML.replace(/ /g,'%20');
        let downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        downloadLink.href = 'data:'+dataType+', '+tableHtml;
        downloadLink.download = 'Assignment-Marks.xls';
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }

      printReport2(): void{
        window.print();
      }

      public searchResult(Key:string):void{
        const rest : Result[] =[];
        for(const results of this.result){
           if(results.term.toLowerCase().indexOf(Key.toLowerCase())!==-1 || results.studentID.toLowerCase().indexOf(Key.toLowerCase())!==-1){
             rest.push(results);
           }
        }
        this.result=rest;
        if(rest.length ===0 || !Key){
          this.getAllByTeacherID(this.sid);
        }
      }

}
