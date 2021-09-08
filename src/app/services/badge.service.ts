import { environment } from './../../environments/environment';
import { Badge } from './badge';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ( {
    providedIn: 'root',
})

export class BadgeService {
    private apiServerUrl = 'http://localhost:8085/api/';

    constructor (private http:HttpClient) {}

    public getBadges() : Observable <Badge[]> {
        return this.http.get<Badge[]> (`${this.apiServerUrl}badges`);
    }

    public addBadge(badge: Badge) : Observable <Badge> {
        return this.http.post<Badge> (`${this.apiServerUrl}addbadge`, badge);
    }

    public updateBadge(badge: Badge) : Observable <Badge> {
        return this.http.put<Badge> (`${this.apiServerUrl}badge/update`, badge);
    }
    
    public deleteBadge(badgeID: String) : Observable <void> {
        return this.http.delete<void> (`${this.apiServerUrl}badge/delete/${badgeID}`);
    }
}




