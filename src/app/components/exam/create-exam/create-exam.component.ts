
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Exam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  
  sid="";
  

  constructor(private route: ActivatedRoute,private examService:ExamService) {}
   
     
   
    
   

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      let id:any =params.get('teacherID');
      this.sid=id;
    })
  }



public onAddExam(addForm:NgForm):void{
 
   this.examService.createExam(addForm.value).subscribe(
     (response: Exam)=>{
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
    
   
    button.setAttribute('data-bs-target','#addExamModal');
  }
  
  container?.appendChild(button);
  button.click();
}
    
    
}
