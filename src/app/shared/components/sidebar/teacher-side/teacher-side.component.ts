import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-side',
  templateUrl: './teacher-side.component.html',
  styleUrls: ['./teacher-side.component.css']
})
export class TeacherSideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
