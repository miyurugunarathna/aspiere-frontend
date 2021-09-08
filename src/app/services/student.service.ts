import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Student } from "../models/student";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor (private http: HttpClient) { }

    getAll(): Observable<Student[]> {
        const getAllURL = environment.baseUrl + '/students/';
        return this.http.get<Student[]>(getAllURL);
    }

    get(id: string): Observable<any> {
        const getURL = environment.baseUrl + '/student/' + id;
        return this.http.get(getURL);
    }

    create(student: Student): Observable<void> {
        const addURL = environment.baseUrl + '/addStudent/';
        return this.http.post<void>(addURL, student);
    }

    update(id: string, student: Student): Observable<Object> {
        const editURL = environment.baseUrl + '/update/' + id;
        return this.http.put(editURL, student);
    }

    delete(id: string): Observable<any> {
        const delURL = environment.baseUrl + '/delete/' + id;
        return this.http.delete(delURL);
    }

}