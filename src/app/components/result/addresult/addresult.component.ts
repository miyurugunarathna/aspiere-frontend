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
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.css']
})
export class AddresultComponent implements OnInit {
  sid="";
  public enrolls:Enroll[] =[];
  public result:Result | any;

  constructor(private route: ActivatedRoute,private examService:ExamService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('teacherID');
      this.sid=id;
    })
    this.getAll(this.sid);
  }
  public getAll(sid:String):void{
    this.examService.getStudentID(sid).subscribe(
      (response:Enroll[])=>{
        this.enrolls = response;
      
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };


      public onAddResult(addForm:NgForm):void{
 
        this.examService.addResult(addForm.value).subscribe(
          (response: Result)=>{
            console.log(response);
            this.onOpenModel('add');
            
          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
            addForm.reset();
          }
        );
     }

     public onOpenModel(mode:String):void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-bs-toggle','modal');
      if(mode==='add'){
        
       
        button.setAttribute('data-bs-target','#addResultModal');
      }
      
      container?.appendChild(button);
      button.click();
    }
   

}
