import { getLocaleDateFormat } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/models/payment/payment';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-pay-confirm',
  templateUrl: './pay-confirm.component.html',
  styleUrls: ['./pay-confirm.component.css']
})
export class PayConfirmComponent implements OnInit {

  public payment = new Payment;
  private confirmSatate: boolean = true;
  public valueID: any;

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
  }
  
  public continuePay(): void {
    if(this.confirmSatate == true) {
      this.confirmSatate = !this.confirmSatate;
      this.savePayment();
      let confirmBtn = document.getElementById('confirmBtn');
      if(confirmBtn?.innerHTML) {
        confirmBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
      }
      setTimeout(this.loading, 1000.0);
    }
    else {
    }
  }

  public loading(): void {
    let confirmBtn = document.getElementById('confirmBtn');
    if(confirmBtn?.innerHTML) {
      confirmBtn.innerHTML = 'Continue to Pay';
      confirmBtn.setAttribute('type', 'submit');
    }
  }

  public savePayment(): void {
    this.payment.paymentID = 'pid1200';
    this.payment.issuedDate = new Date;
    this.payment.amount = 1200;
    this.payment.description = 'Grade 09 Sinhala - Mrs. Yuri Natsuki - Class Fee';
    this.payment.payerName = 'Miyuru Gunarathna';
    this.payment.payerMobile = '0776424889';
    this.payment.payerEmail = 'miyurupriyawadan@gmail.com';
    this.payment.receiverName = 'Yuri Natsuki';
    this.payment.receiverMobile = '0712306898';
    this.payment.receiverEmail = 'yuri.natsuki@gmail.com'
    console.log(this.payment);
    this.paymentService.savePayment(this.payment).subscribe(
      (response: string) => {
        this.valueID = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
