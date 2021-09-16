import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coursematerial } from 'src/app/models/coursematerial/coursematerial';

@Injectable({
  providedIn: 'root'
})
export class CoursematerialService {

  constructor(private http:HttpClient) { }

  private apiURL = 'http://localhost:8085/api';

  public getCourseTopics(): Observable<Coursematerial[]> {
    return this.http.get<Coursematerial[]>(`${this.apiURL}/coursetopic`);
  }

  public getCourseTopic(coursetopicID: string): Observable<Coursematerial> {
    return this.http.get<Coursematerial>(`${this.apiURL}/coursetopic/${coursetopicID}`);
  }

  public addCourseTopic(coursematerial: Coursematerial): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/coursetopic/add`, coursematerial, {responseType: 'text' as 'json'});
  }

  public updateCourseTopic(coursematerial: Coursematerial, coursetopicID: string): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/coursetopic/update/${coursetopicID}`, coursematerial, {responseType: 'text' as 'json'});
  }

  public deleteCourseTopic(coursetopicID: string): Observable<string> {
    return this.http.delete<string>(`${this.apiURL}/coursetopic/delete/${coursetopicID}`, {responseType: 'text' as 'json'});
  }
}
