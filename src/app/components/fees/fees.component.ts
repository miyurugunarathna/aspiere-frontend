import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeService } from 'src/app/services/fees/fee.service';
import { Fee } from 'src/app/models/fees/fee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  public fees: Fee[] = [];
  public feeOne: Fee = new Fee;
  public addMessage: any;
  public delID: any;

  constructor(private feeService:FeeService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.feeOne);
    this.getFees();
  }

  
  
  public onDismiss(dismisEle: string): void {
    let inNoClose = document.getElementById(dismisEle);
    if(inNoClose?.style.display === 'block') {
      inNoClose.style.display = 'none';
      this.addMessage = '';
    }
  }

  public getFees(): void {
    this.feeService.getFees().subscribe(
      (response: Fee[]) => {
        this.fees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getFee(id: string): void {
    this.feeService.getFee(id).subscribe(
      (response: Fee) => {
        console.log(response);
        this.feeOne = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public addFee(addFeeForm: NgForm): void {
    this.feeService.addFee(addFeeForm.value).subscribe(
      (response: string) => {
        console.log(response);
        addFeeForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getFees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateFee(updateFeeForm: NgForm, id: string): void {
    this.feeService.updateFee(updateFeeForm.value, id).subscribe(
      (response: string) => {
        console.log(response);
        updateFeeForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.feeOne = new Fee;
        this.getFees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteConfime(id: string): void {
    let deleteConfime = document.getElementById('deleteConfime');
    if(deleteConfime?.style.display) {
      deleteConfime.style.display = 'block';
    }
    this.delID = id;
    console.log(deleteConfime);
  }

  public deleteFee(id: string): void {
    this.onDismiss('deleteConfime');
    this.feeService.deleteFee(id).subscribe(
      (response: string) => {
        console.log(response);
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getFees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
