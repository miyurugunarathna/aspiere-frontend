import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from 'src/app/models/class/class';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  private apiURL = 'http://localhost:8080/api';

  public getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(`${this.apiURL}/classes`);
  }

  public getClass(classID: string): Observable<Class> {
    return this.http.get<Class>(`${this.apiURL}/Classes/${classID}`);
  }

  public addClass(classes: Class): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/classes/add`, classes, {responseType: 'text' as 'json'});
  }

  public deleteClass(classID: string): Observable<string> {
    return this.http.delete<string>(`${this.apiURL}/classes/delete/${classID}`, {responseType: 'text' as 'json'});
  }

}
