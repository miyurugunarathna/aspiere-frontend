import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tpackage } from 'src/app/models/packages/tpackage';
import { TpackageService } from 'src/app/services/packages/tpackage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tpackages',
  templateUrl: './tpackages.component.html',
  styleUrls: ['./tpackages.component.css']
})
export class TpackagesComponent implements OnInit {

  public tpackages: Tpackage[] = [];
  public tpackageOne: Tpackage = new Tpackage;
  public addMessage: any;
  public delID: any;

  constructor(private tpackageService:TpackageService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.tpackageOne);
    this.getPackages();
  }

  public onDismiss(dismisEle: string): void {
    let inNoClose = document.getElementById(dismisEle);
    if(inNoClose?.style.display === 'block') {
      inNoClose.style.display = 'none';
      this.addMessage = '';
    }
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

  public addPackage(addPackageForm: NgForm): void {
    this.tpackageService.addPackage(addPackageForm.value).subscribe(
      (response: string) => {
        console.log(response);
        addPackageForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getPackages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updatePackage(updatePackageForm: NgForm, id: number): void {
    this.tpackageService.updatePackage(updatePackageForm.value, id).subscribe(
      (response: string) => {
        console.log(response);
        updatePackageForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.tpackageOne = new Tpackage;
        this.getPackages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteConfirm(id: number): void {
    let deleteConfirm = document.getElementById('deleteConfirm');
    if(deleteConfirm?.style.display) {
      deleteConfirm.style.display = 'block';
    }
    this.delID = id;
    console.log(deleteConfirm);
  }

  public deletePackage(id: number): void {
    this.onDismiss('deleteConfirm');
    this.tpackageService.deletePackage(id).subscribe(
      (response: string) => {
        console.log(response);
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getPackages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }  




  }





