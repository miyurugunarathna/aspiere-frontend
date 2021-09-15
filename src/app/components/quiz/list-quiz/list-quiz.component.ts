import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Exam } from 'src/app/models/exam';
import { Quiz } from 'src/app/models/quiz';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {
  sid="";
  public quiz:Quiz[] =[];
  public updateQuiz:Quiz | undefined;
  public deleteQuiz:Quiz | any;
  constructor(private route: ActivatedRoute,private examService:ExamService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('teacherID');
      this.sid=id;
    })
    this.getAllByTeacherID(this.sid);
  }

  public getAllByTeacherID(sid:String):void{
    this.examService.getAllByTeacherID(sid).subscribe(
      (response:Quiz[])=>{
        this.quiz = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };

      public onOpenModel(quiz:Quiz,mode:String):void{
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-bs-toggle','modal');
        if(mode==='edit'){
          
          this.updateQuiz=quiz;
          button.setAttribute('data-bs-target','#updateQuizModal');
        }
        if(mode==='delete'){
          this.deleteQuiz=quiz;
          button.setAttribute('data-bs-target','#deleteQuizModal');
        }
        container?.appendChild(button);
        button.click();
    }

    public onUpdateQuiz(quiz:Quiz):void{
        
      this.examService.updateQuiz(quiz.qid,quiz).subscribe(
        (response: Quiz)=>{
          console.log(response);
          this.getAllByTeacherID(this.sid);
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      );
   }

   
   public ondeleteQuiz(qid:String):void{
        
    this.examService.deleteQuiz(qid).subscribe(
      (response: void)=>{
        console.log(response);
        this.getAllByTeacherID(this.sid);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
 }

}
