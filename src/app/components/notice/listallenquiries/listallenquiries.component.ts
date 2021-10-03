import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NoticeService } from 'src/app/services/notice.service';
import { Notice } from 'src/app/models/notice';
import { HttpErrorResponse } from '@angular/common/http';
import { Enquiry } from 'src/app/models/enquiry';

@Component({
  selector: 'app-listallenquiries',
  templateUrl: './listallenquiries.component.html',
  styleUrls: ['./listallenquiries.component.css']
})
export class ListallenquiriesComponent implements OnInit {
  public enquiries:Enquiry[] =[];
  public deleteEnquiry:Enquiry | any;

  constructor(private route:ActivatedRoute,private noticeService:NoticeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll():void{
    this.noticeService.getAllEnquiry().subscribe(
      (response:Enquiry[])=>{
        this.enquiries = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
      }

      public onOpenModel(enquiry:Enquiry,mode:String):void{
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-bs-toggle','modal');
       
        if(mode==='delete'){
          this.deleteEnquiry=enquiry;
          button.setAttribute('data-bs-target','#deleteEnquiryModal');
        }
        container?.appendChild(button);
        button.click();
    }

    public ondeleteEnquiry(enquiryid:String):void{
        
      this.noticeService.deleteEnquiry(enquiryid).subscribe(
        (response: void)=>{
          console.log(response);
          this.getAll();
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      );
   }


}
