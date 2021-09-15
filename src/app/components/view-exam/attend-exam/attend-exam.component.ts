import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import { Exam } from 'src/app/models/exam';
import { Answer } from 'src/app/models/answer';
import { Quiz } from 'src/app/models/quiz';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-attend-exam',
  templateUrl: './attend-exam.component.html',
  styleUrls: ['./attend-exam.component.css']
})
export class AttendExamComponent implements OnInit {
  key="";
  studentID="";
  public quizzes:Quiz[] =[];
  constructor(private route: ActivatedRoute,private examService:ExamService ,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('key');
      this.key=id;
    })

    this.route.paramMap.subscribe(params => {
      let nid:any =params.get('id');
      this.studentID=nid;
    })
   
    this.getAllByKey(this.key);
  }

  public getAllByKey(key:String):void{
    this.examService.getAllByKey(key).subscribe(
      (response:Quiz[])=>{
        this.quizzes = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      };


      public onAddAnswer(addForm:NgForm):void{
 
        this.examService.addAnswer(addForm.value).subscribe(
          (response: Answer)=>{
            console.log(response);
           this.onOpenModel('add');
           this.router.navigate(['app/exams/display-all-marks',this.key]);
           
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
