import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Exam } from 'src/app/models/exam';
import { Quiz } from 'src/app/models/quiz';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  sid="";
  public exams:Exam[] =[];
  

  constructor(private route: ActivatedRoute,private examService:ExamService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('teacherID');
      this.sid=id;
    })
    this.getAll(this.sid);
  }

  public getAll(sid:String):void{
    this.examService.getAll(sid).subscribe(
      (response:Exam[])=>{
        this.exams = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };

      public onAddQuiz(addForm:NgForm):void{
 
        this.examService.createQuiz(addForm.value).subscribe(
          (response: Quiz)=>{
            console.log(response);
            this.onOpenModel('add');
            addForm.reset();
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
        
       
        button.setAttribute('data-bs-target','#addQuizModal');
      }
      
      container?.appendChild(button);
      button.click();
    }

}
