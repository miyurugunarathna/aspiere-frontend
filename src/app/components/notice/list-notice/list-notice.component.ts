import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NoticeService } from 'src/app/services/notice.service';
import { Notice } from 'src/app/models/notice';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-list-notice',
  templateUrl: './list-notice.component.html',
  styleUrls: ['./list-notice.component.css']
})
export class ListNoticeComponent implements OnInit {
  public notices:Notice[] =[];
  public updateNotice:Notice | undefined;
  public deleteNotice:Notice | any;

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

      public onOpenModel(notice:Notice,mode:String):void{
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-bs-toggle','modal');
        if(mode==='edit'){
          
          this.updateNotice=notice;
          button.setAttribute('data-bs-target','#updateNoticeModal');
        }
        if(mode==='delete'){
          this.deleteNotice=notice;
          button.setAttribute('data-bs-target','#deleteNoticeModal');
        }
        container?.appendChild(button);
        button.click();
    }

    public onUpdateNotice(notice:Notice):void{
        
      this.noticeService.updateNotice(notice.noticeID,notice).subscribe(
        (response: Notice)=>{
          console.log(response);
          this.getAll();
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      );
   }

   public ondeleteNotice(noticeID:String):void{
        
    this.noticeService.deleteNotice(noticeID).subscribe(
      (response: void)=>{
        console.log(response);
        this.getAll();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
 }


 printReport(): void{
  let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
  let tableSelect = document.getElementById('notice');
  let tableHtml = tableSelect?.outerHTML.replace(/ /g,'%20');
  let downloadLink = document.createElement('a');
  document.body.appendChild(downloadLink);
  downloadLink.href = 'data:'+dataType+', '+tableHtml;
  downloadLink.download = 'Assignment-Marks.xls';
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

printReport2(): void{
  window.print();
}

public searchResult(Key:string):void{
  const rest : Notice[] =[];
  for(const results of this.notices){
     if(results.date.toLowerCase().indexOf(Key.toLowerCase())!==-1 ){
       rest.push(results);
     }
  }
  this.notices=rest;
  if(rest.length ===0 || !Key){
    this.getAll();
  }
}



}
