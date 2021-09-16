import { Badge } from 'src/app/services/badge';
import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Badges } from '../models/badge/badge';


@Injectable ( {
    providedIn: 'root',
})

export class BadgeService {
    private apiServerUrl = 'http://localhost:8085/api/';

    constructor (private http:HttpClient) {}

    public getBadges() : Observable <Badge[]> {
        return this.http.get<Badge[]> (`${this.apiServerUrl}badges`);
    }

    public getBadge(badgeID: string): Observable<Badge> {
        return this.http.get<Badge>(`${this.apiServerUrl}badge/${badgeID}`);
      }

    public addBadge(badge: Badge) : Observable <string> {
        return this.http.post<string> (`${this.apiServerUrl}addbadge`, badge, {responseType: 'text' as 'json'});
    }

    public updateBadge(badge: Badge, badgeID : string) : Observable <string> {
        return this.http.put<string> (`${this.apiServerUrl}badge/update/${badgeID}`, badge, {responseType: 'text' as 'json'});
    }
    
    public deleteBadge(badgeID: String) : Observable <void> {
        return this.http.delete<void> (`${this.apiServerUrl}badge/delete/${badgeID}`, {responseType: 'text' as 'json'});
    }


}




