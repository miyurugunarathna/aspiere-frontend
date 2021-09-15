import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tpackage } from 'src/app/models/packages/tpackage';
import { TpackageService } from 'src/app/services/packages/tpackage.service';

@Component({
  selector: 'app-mypackage',
  templateUrl: './mypackage.component.html',
  styleUrls: ['./mypackage.component.css']
})
export class MypackageComponent implements OnInit {

public tpackages: Tpackage[] = [];
public tpackageOne: Tpackage = new Tpackage;


  constructor(private tpackageService:TpackageService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.tpackageOne);
    this.getPackage(10);
  }


  public getPackage(id: number): void {
    this.tpackageService.getPackage(id).subscribe(
      (response: Tpackage) => {
        console.log(response);
        this.tpackageOne = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
