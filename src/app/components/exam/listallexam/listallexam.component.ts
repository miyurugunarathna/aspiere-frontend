import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Exam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-listallexam',
  templateUrl: './listallexam.component.html',
  styleUrls: ['./listallexam.component.css']
})
export class ListallexamComponent implements OnInit {
  sid="";
  public exams:Exam[] =[];
  public updateExam:Exam | any;
  public deleteExam:Exam | any;
  
  constructor(private route:ActivatedRoute,private examService:ExamService) { }

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
      }
      
    public onOpenModel(exam:Exam,mode:String):void{
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-bs-toggle','modal');
        if(mode==='edit'){
          
          this.updateExam=exam;
          button.setAttribute('data-bs-target','#updateExamModal');
        }
        if(mode==='delete'){
          this.deleteExam=exam;
          button.setAttribute('data-bs-target','#deleteExamModal');
        }
        container?.appendChild(button);
        button.click();
    }

    public onUpdateExam(exam:Exam):void{
        
      this.examService.updateExam(exam.key,exam).subscribe(
        (response: Exam)=>{
          console.log(response);
          this.getAll(this.sid);
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      );
   }

   public ondeleteExam(examID:String):void{
        
    this.examService.deleteExam(examID).subscribe(
      (response: void)=>{
        console.log(response);
        this.getAll(this.sid);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
 }

  }


