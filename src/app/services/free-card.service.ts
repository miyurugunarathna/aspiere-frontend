import { FreeCard } from "./free-card";
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable ( {
    providedIn: 'root',
})

export class FreeCardService {
   
    private apiServerUrl = 'http://localhost:8080/api/';

    constructor (private http:HttpClient) {}

    public getFreeCard() : Observable <FreeCard[]> {
        return this.http.get<FreeCard[]> (`${this.apiServerUrl}freeCards`);
    }
}