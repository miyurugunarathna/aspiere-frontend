import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';
import { Notice } from 'src/app/models/notice';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private noticeService:NoticeService) { }

  ngOnInit(): void {
  }

  public onAddNotice(addForm:NgForm):void{
 
    this.noticeService.createNotice(addForm.value).subscribe(
      (response: Notice)=>{
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
    
   
    button.setAttribute('data-bs-target','#addNoticeModal');
  }
  
  container?.appendChild(button);
  button.click();
}


}
