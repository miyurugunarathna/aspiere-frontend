import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fee } from 'src/app/models/fees/fee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor(private http:HttpClient) { }

  private apiURL = environment.baseUrl;

  public getFees(): Observable<Fee[]> {
    return this.http.get<Fee[]>(`${this.apiURL}fee/all`);
  }

  public getFee(feeID: string): Observable<Fee> {
    return this.http.get<Fee>(`${this.apiURL}fee/${feeID}`);
  }

  public addFee(fee: Fee): Observable<string> {
    return this.http.post<string>(`${this.apiURL}fee/add`, fee, {responseType: 'text' as 'json'});
  }
  
  public updateFee(fee: Fee, feeID: string): Observable<string> {
    return this.http.post<string>(`${this.apiURL}fee/update/${feeID}`, fee, {responseType: 'text' as 'json'});
  }
  
  public deleteFee(feeID: string): Observable<string> {
    return this.http.delete<string>(`${this.apiURL}fee/delete/${feeID}`, {responseType: 'text' as 'json'});
  }
}
