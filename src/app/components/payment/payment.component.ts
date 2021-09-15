import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment/payment';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  public payments: Payment[] = [];
  
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getPayments();
  }


  public getPayments(): void {
    this.paymentService.getPayments().subscribe(
      (response: Payment[]) => {
        this.payments = response;
        console.log(this.payments);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onlyDate(date: any): string {
    console.log(new Date(new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()));
    return new Date(date).getFullYear() + '-' + new Date(date).getMonth() + '-' + new Date(date).getDate();
  }
}
