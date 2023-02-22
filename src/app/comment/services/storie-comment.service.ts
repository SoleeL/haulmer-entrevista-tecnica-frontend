import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Story, Comments } from '../interfaces/comment.interface';
import { Observable, forkJoin, of } from 'rxjs';
import { expand, map, mergeMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class StorieCommentService {
    private apiBaseUrl: string = 'https://hacker-news.firebaseio.com/v0';

    constructor(private http: HttpClient) {}

    getObservableDataStory(id: number): Observable<Story> {
        const urlReq = `${this.apiBaseUrl}/item/${id}.json`;
        return this.http.get<Story>(urlReq);
    }

    getObservableDataComment(id: number): Observable<Comments> {
        const urlReq = `${this.apiBaseUrl}/item/${id}.json`;
        return this.http.get<Comments>(urlReq);
    }

    getDataComments(ids: number[] | undefined): Observable<Comments[]> {
        const observables = ids!.map(id => this.getObservableDataComment(id));
        return forkJoin(observables);
    }
}
