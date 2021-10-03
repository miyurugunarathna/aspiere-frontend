import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NoticeService } from 'src/app/services/notice.service';
import { Notice } from 'src/app/models/notice';
import { HttpErrorResponse } from '@angular/common/http';
import { Enquiry } from 'src/app/models/enquiry';


@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  public notices:Notice[] =[];


  constructor(private route:ActivatedRoute,private noticeService:NoticeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll():void{
    this.noticeService.getAll().subscribe(
      (response:Notice[])=>{
        this.notices = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      }


      public onAddEnquiry(addForm:NgForm):void{
 
        this.noticeService.createEnquiry(addForm.value).subscribe(
          (response: Enquiry)=>{
            console.log(response);
            
            addForm.reset();
          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
            addForm.reset();
          }
        );
     }
    

}
