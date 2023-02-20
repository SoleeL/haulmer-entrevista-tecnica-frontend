import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Story } from '../interfaces/story.interface';

@Injectable({
    providedIn: 'root',
})
export class BestStoriesService {
    private apiBaseUrl: string = 'https://hacker-news.firebaseio.com/v0';

    constructor(private http: HttpClient) {}

    getObservableIdsBestStories(): Observable<number[]> {
        const urlReq = `${this.apiBaseUrl}/topstories.json`;
        return this.http.get<number[]>(urlReq);
    }

    getObservableDataStory(id: number): Observable<Story> {
        const urlReq = `${this.apiBaseUrl}/item/${id}.json`;
        return this.http.get<Story>(urlReq);
    }

    getDataStories(ids: number[]): Observable<Story[]> {
        const observables = ids.map(id => this.getObservableDataStory(id));
        return forkJoin(observables);
    }
}
