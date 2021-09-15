import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
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

    getAllTeachers(): Observable<Teacher[]> {
        const getAllURL = environment.baseUrl + '/teachers/';
        return this.http.get<Teacher[]>(getAllURL);
    }

    getTeacher(id: string): Observable<Object> {
        const getURL = environment.baseUrl + '/teacher/' + id;
        return this.http.get(getURL);
    }

    createTeacher(teacher: Teacher): Observable<void> {
        const addURL = environment.baseUrl + '/addteacher/';
        return this.http.post<void>(addURL, teacher);
    }

    updateTeacher(id: string, teacher: Teacher): Observable<any> {
        const editURL = environment.baseUrl + '/updateTeacher/' + id;
        return this.http.put(editURL, teacher);
    }

    deleteTeacher(id: string): Observable<any> {
        const delURL = environment.baseUrl + '/deleteTeacher/' + id;
        return this.http.delete(delURL);
    }

    deleteAllTeachers(): Observable<any> {
        return this.http.delete('${baseURL}/delete');
    }

}