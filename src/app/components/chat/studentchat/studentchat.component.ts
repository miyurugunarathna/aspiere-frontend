import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'src/app/services/notice.service';
import { Enroll } from 'src/app/models/enrolltest2';
import { Question } from 'src/app/models/question';
import { Reply } from 'src/app/models/reply';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentchat',
  templateUrl: './studentchat.component.html',
  styleUrls: ['./studentchat.component.css']
})
export class StudentchatComponent implements OnInit {
  sid="";
  public enrolls:Enroll[] =[];
  public questions:Question[]=[];
  public replies:Reply[]=[];
  public question:Question | any;


  constructor(private route: ActivatedRoute,private noticeService:NoticeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('sid');
      this.sid=id;
    })
    this.getAll(this.sid);
    this.getAllByStudentID(this.sid);
    this.getAllBysid(this.sid);
  }

  public getAll(sid:String):void{
    this.noticeService.getStudentdetails(sid).subscribe(
      (response:Enroll[])=>{
        this.enrolls = response;
      
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      }


      public onAddQuestion(addForm:NgForm):void{
 
        this.noticeService.addQuestion(addForm.value).subscribe(
          (response: Question)=>{
            console.log(response);
            this.onOpenModel('add');
            
          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
            addForm.reset();
          }
        );
     }

     public getAllByStudentID(sid:String):void{
      this.noticeService.getAllByStudentID(sid).subscribe(
        (response:Question[])=>{
          this.questions = response;
        
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
        );
        }

        public getAllBysid(sid:String):void{
          this.noticeService.getAllBysid(sid).subscribe(
            (response:Reply[])=>{
              this.replies = response;
            
            },
            (error: HttpErrorResponse)=>{
              alert(error.message);
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
        
       
        button.setAttribute('data-bs-target','#addQuestionModal');
      }
      
      container?.appendChild(button);
      button.click();
    }

}
