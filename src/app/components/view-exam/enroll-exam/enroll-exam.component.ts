import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Exam } from 'src/app/models/exam';
import { Quiz } from 'src/app/models/quiz';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-enroll-exam',
  templateUrl: './enroll-exam.component.html',
  styleUrls: ['./enroll-exam.component.css']
})
export class EnrollExamComponent implements OnInit {
  key2='';
  enkey='';
  qnum=1;
  public quizzes:Quiz[] =[];
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
          this.router.navigate(['app/enroll-exam/attend-exam',this.enkey,this.sid]);
        }
       
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };

     


}
