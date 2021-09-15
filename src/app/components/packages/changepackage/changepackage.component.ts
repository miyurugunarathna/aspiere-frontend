import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tpackage } from 'src/app/models/packages/tpackage';
import { TpackageService } from 'src/app/services/packages/tpackage.service';

@Component({
  selector: 'app-changepackage',
  templateUrl: './changepackage.component.html',
  styleUrls: ['./changepackage.component.css']
})
export class ChangepackageComponent implements OnInit {

  public tpackages: Tpackage[] = [];
  public tpackageOne: Tpackage = new Tpackage;

  constructor(private tpackageService:TpackageService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.tpackageOne);
    this.getPackages();
    this.getPackage(12);
  }

  public getPackages(): void {
    this.tpackageService.getPackages().subscribe(
      (response: Tpackage[]) => {
        this.tpackages = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
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
