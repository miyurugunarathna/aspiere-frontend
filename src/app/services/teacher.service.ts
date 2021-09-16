import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Teacher } from "../models/teacher";
import { environment } from "src/environments/environment";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})

export class TeacherService {

    isLoggedIn = false;
    redirectUrl: string;

    constructor (private http: HttpClient) { }

    getAll(): Observable<Teacher[]> {
        const getAllURL = environment.baseUrl + '/teacher/all';
        return this.http.get<Teacher[]>(getAllURL);
    }

    get(id: string): Observable<any> {
        const getURL = environment.baseUrl + '/teacher/get/' + id;
        return this.http.get(getURL);
    }

    create(teacher: Teacher): Observable<void> {
        const addURL = environment.baseUrl + '/teacher/add/';
        return this.http.post<void>(addURL, teacher);
    }

    update(id: string, teacher: Teacher): Observable<Object> {
        const editURL = environment.baseUrl + '/teacher/update/' + id;
        return this.http.put(editURL, teacher);
    }

    delete(id: string): Observable<any> {
        const delURL = environment.baseUrl + '/teacher/delete/' + id;
        return this.http.delete(delURL);
    }

    login(data: any): Observable<any> {
        alert(data);
        const loginUrl = environment.baseUrl + '/teacher/login';
        return this.http.post<any>(loginUrl, data)
          .pipe(
            tap(_ => this.isLoggedIn = true),
            catchError(this.handleError('login', []))
          );
      }
    
      logout(): Observable<any> {
        const logoutUrl = environment.baseUrl + '/teacher/logout';
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