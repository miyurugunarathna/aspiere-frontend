import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/Operators";
import { Teacher } from "../models/teacher";
import { environment } from "src/environments/environment";

//const baseURL = 'http://localhost:8085/api/';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    private static readonly POST_TEACHER_URL = '/api/teacher';
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor (private http: HttpClient) { }

    getAll(): Observable<Teacher[]> {
        const getAllURL = environment.baseUrl + '/teachers/';
        return this.http.get<Teacher[]>(getAllURL);
    }

    get(id: string): Observable<Object> {
        const getURL = environment.baseUrl + '/teacher/' + id;
        return this.http.get(getURL);
    }

    create(teacher: Teacher): Observable<void> {
        const addURL = environment.baseUrl + '/addteacher/';
        return this.http.post<void>(addURL, teacher);
    }

    createTeacher(teacher: Teacher): Observable<any> {
        return this.http.post(TeacherService.POST_TEACHER_URL, teacher, { headers:this.headers });
    }

    update(id: string, teacher: Teacher): Observable<Object> {
        const editURL = environment.baseUrl + '/edit/' + id;
        return this.http.put(editURL, teacher);
    }

    delete(id: string): Observable<any> {
        const delURL = environment.baseUrl + '/delete/' + id;
        return this.http.delete(delURL);
    }

    deleteAll(): Observable<any> {
        return this.http.delete('${baseURL}/delete');
    }

}