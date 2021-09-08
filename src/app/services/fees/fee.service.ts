import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fee } from 'src/app/models/fees/fee';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor(private http:HttpClient) { }

  private apiURL = 'http://localhost:8085/api';

  public getFees(): Observable<Fee[]> {
    return this.http.get<Fee[]>(`${this.apiURL}/fees`);
  }

  public getFee(feeID: string): Observable<Fee> {
    return this.http.get<Fee>(`${this.apiURL}/fees/${feeID}`);
  }

  public addFee(fee: Fee): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/fees/add`, fee, {responseType: 'text' as 'json'});
  }
  
  public updateFee(fee: Fee, feeID: string): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/fees/update/${feeID}`, fee, {responseType: 'text' as 'json'});
  }
  
  public deleteFee(feeID: string): Observable<string> {
    return this.http.delete<string>(`${this.apiURL}/fees/delete/${feeID}`, {responseType: 'text' as 'json'});
  }
}
