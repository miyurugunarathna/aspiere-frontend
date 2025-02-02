import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/payment/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  private apiURL = 'http://localhost:8080/api';

  public getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiURL}/payment/all`);
  }

  public getPayment(paymentID: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiURL}/payment/${paymentID}`);
  }

  public savePayment(payment: Payment): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/payment/add`, payment, {responseType: 'text' as 'json'});
  }

}
