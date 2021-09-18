import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/models/courses/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  private apiURL = 'http://localhost:8080/api';

  public getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(`${this.apiURL}/courses`);
  }

  public getCourse(coursesID: string): Observable<Courses> {
    return this.http.get<Courses>(`${this.apiURL}/courses/${coursesID}`);
  }

  public addCourse(courses: Courses): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/courses/add`, courses, {responseType: 'text' as 'json'});
  }
  
  public updateCourse(courses: Courses, coursesID: string): Observable<string> {
    return this.http.post<string>(`${this.apiURL}/courses/update/${coursesID}`, courses, {responseType: 'text' as 'json'});
  }
  
  public deleteCourse(coursesID: string): Observable<string> {
    return this.http.delete<string>(`${this.apiURL}/courses/delete/${coursesID}`, {responseType: 'text' as 'json'});
  }
}
