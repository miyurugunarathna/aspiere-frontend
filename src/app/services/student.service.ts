import { Injectable, ElementRef } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Student } from "../models/student";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    isLoggedIn = false;
    redirectUrl: string;

    constructor (private http: HttpClient) { }

    getAll(): Observable<Student[]> {
        const getAllURL = environment.baseUrl + 'student/all';
        return this.http.get<Student[]>(getAllURL);
    }

    get(id: number): Observable<any> {
        const getURL = environment.baseUrl + 'student/get/' + id;
        return this.http.get(getURL);
    }

    create(student: Student): Observable<void> {
        const addURL = environment.baseUrl + 'student/add/';
        return this.http.post<void>(addURL, student);
    }

    update(id: number, student: Student): Observable<Object> {
        const editURL = environment.baseUrl + 'student/update/' + id;
        return this.http.put(editURL, student);
    }

    delete(id: number): Observable<any> {
        const delURL = environment.baseUrl + 'student/delete/' + id;
        return this.http.delete(delURL);
    }

    login(data: any): Observable<any> {
        alert(data);
        const loginUrl = environment.baseUrl + 'student/login';
        return this.http.post<any>(loginUrl, data)
          .pipe(
            tap(_ => this.isLoggedIn = true),
            catchError(this.handleError('login', []))
          );
      }
    
    logout(): Observable<any> {
      const logoutUrl = environment.baseUrl + 'student/logout';
      return this.http.get<any>(logoutUrl)
        .pipe(
          tap(_ => this.isLoggedIn = false),
          catchError(this.handleError('logout', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
        alert(error.message);
    
        return of(result as T);
      };
    }
    
    private log(message: string) {
      console.log(message);
    }

}