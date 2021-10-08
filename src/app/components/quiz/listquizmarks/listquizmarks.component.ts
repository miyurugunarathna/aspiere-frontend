import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import {Marks}  from 'src/app/models/marks';
import { Exam } from 'src/app/models/exam';
import { Quiz } from 'src/app/models/quiz';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listquizmarks',
  templateUrl: './listquizmarks.component.html',
  styleUrls: ['./listquizmarks.component.css']
})
export class ListquizmarksComponent implements OnInit {

  key2='';
  enkey='';
  qnum=1;
  public quizzes:Quiz[] =[];
  public markses:Marks[] =[];
  private visible = true;
  sid='T01';


  constructor(private route: ActivatedRoute,private examService:ExamService ,private router:Router) { }

  ngOnInit(): void {
    
  }

  addKey(key:any):void{
    this.enkey=key;
    console.log(key);
    this.getAllByKey(this.enkey)
   
}
public getAllByKey(key:String):void{
  this.examService.getAllByKey(key).subscribe(
    (response:Quiz[])=>{
      if(response[0]==null){
        alert("Invalied Key");
      }else{
        this.quizzes = response;
        
        this.getAllByKey2(this.enkey);
      }
     
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
    );
    };

    public getAllByKey2(key:String):void{
      this.examService.addMarks(key).subscribe(
        (response:Marks[])=>{
          this.markses = response;
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
        );
        };

        printReport(): void{
          let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
          let tableSelect = document.getElementById('quiz');
          let tableHtml = tableSelect?.outerHTML.replace(/ /g,'%20');
          let downloadLink = document.createElement('a');
          document.body.appendChild(downloadLink);
          downloadLink.href = 'data:'+dataType+', '+tableHtml;
          downloadLink.download = 'Quiz-Marks.xls';
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
  
        printReport2(): void{
          window.print();
        }

        public searchResult(Key:string):void{
          const rest : Marks[] =[];
          for(const marks of this.markses){
             if(marks.sid.toLowerCase().indexOf(Key.toLowerCase())!==-1){
               rest.push(marks);
             }
          }
          this.markses=rest;
          if(rest.length ===0 || !Key){
            this.getAllByKey2(this.enkey);
          }
        }

}
