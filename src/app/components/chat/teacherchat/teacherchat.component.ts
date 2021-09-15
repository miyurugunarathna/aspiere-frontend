import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'src/app/services/notice.service';
import { Enroll } from 'src/app/models/enrolltest2';
import { Question } from 'src/app/models/question';
import { Reply } from 'src/app/models/reply';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-teacherchat',
  templateUrl: './teacherchat.component.html',
  styleUrls: ['./teacherchat.component.css']
})
export class TeacherchatComponent implements OnInit {
  tid="";
  public enrolls:Enroll[] =[];
  public replyies:Reply[]=[];
  public reply:Reply | any;
  public questions:Question[] =[];

  constructor(private route: ActivatedRoute,private noticeService:NoticeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('tid');
      this.tid=id;
    })
    this.getAll(this.tid);
    this.getAllByTeacherID(this.tid);
    this.getAllBytid(this.tid);
    
  }
  public getAll(tid:String):void{
    this.noticeService.getTeacherdetails(tid).subscribe(
      (response:Enroll[])=>{
        this.enrolls = response;
      
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      }

      public getAllByTeacherID(tid:String):void{
        this.noticeService.getAllByTeacherID(tid).subscribe(
          (response:Question[])=>{
            this.questions = response;
          
          },
          (error: HttpErrorResponse)=>{
            alert(error.message);
          }
          );
          }

          public getAllBytid(tid:String):void{
            this.noticeService.getAllBytid(tid).subscribe(
              (response:Reply[])=>{
                this.replyies = response;
              
              },
              (error: HttpErrorResponse)=>{
                alert(error.message);
              }
              );
              }

      public onAddReply(addForm:NgForm):void{
 
        this.noticeService.addReply(addForm.value).subscribe(
          (response: Reply)=>{
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
        
       
        button.setAttribute('data-bs-target','#addReplyModal');
      }
      
      container?.appendChild(button);
      button.click();
    }

}
