import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
  teacherID:String = 'T01';
  constructor() { }

  ngOnInit(): void {
  }

}
