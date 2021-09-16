import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'http://localhost:8085/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  // login(credentials: any): Observable<any> {
  //   return this.http.post(apiUrl + 'login', {
  //     email: credentials.email,
  //     password: credentials.password
  //   }, httpOptions);
  // }

  login(data: any): Observable<any> {
    alert(data);
    const loginUrl = apiUrl + "login";
    return this.http.post<any>(loginUrl, data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }

  logout(): Observable<any> {
    const logoutUrl = apiUrl + "logout";
    return this.http.get<any>(logoutUrl)
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  }

    // register(user: any): Observable<any> {
    //   const registerURL = apiUrl + 'register';
    //   return this.http.post(registerURL, {
    //     fullname: user.fullname,
    //     email: user.email,
    //     password: user.password
    //   }, httpOptions);
    // }

    register(data: any): Observable<any> {
     const registerURL = apiUrl + 'register'
     return this.http.post<any>(registerURL, data)
       .pipe(
         tap(_ => this.log('login')),
         catchError(this.handleError('login', []))
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
