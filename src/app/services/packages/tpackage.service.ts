import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tpackage } from 'src/app/models/packages/tpackage';

@Injectable({
  providedIn: 'root'
})
export class TpackageService {

  constructor(private http:HttpClient) { }

  private apiURL2 = 'http://localhost:8085/api';  

  public getPackages(): Observable<Tpackage[]> {
    return this.http.get<Tpackage[]>(`${this.apiURL2}/packages`);
  }

  public getPackage(id: number): Observable<Tpackage> {
    return this.http.get<Tpackage>(`${this.apiURL2}/package/${id}`);
  }

  public addPackage(tpackage: Tpackage): Observable<string> {
    return this.http.post<string>(`${this.apiURL2}/package/add`, tpackage, {responseType: 'text' as 'json'});
  }
  
  public updatePackage(tpackage: Tpackage, id: number): Observable<string> {
    return this.http.post<string>(`${this.apiURL2}/package/update/${id}`, tpackage, {responseType: 'text' as 'json'});
  }
  
  public deletePackage(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiURL2}/package/delete/${id}`, {responseType: 'text' as 'json'});
  }
}

