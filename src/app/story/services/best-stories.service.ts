// TODO: Unificar los servicios de consultas externas en uno solo.
// 1.- best-stories.service.ts
// 2.- storie-comment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, forkJoin } from 'rxjs';

import { Story } from '../interfaces/story.interface';

/**
 * Servicio para obtener los 500 Top historias de Hacker-News
 */
@Injectable({
    providedIn: 'root',
})
export class BestStoriesService {
    private apiBaseUrl: string = 'https://hacker-news.firebaseio.com/v0';

    constructor(private http: HttpClient) {}

    /**
     * Obtener un observable para recuperar el array de
     * IDs de las mejores 500 historias de Hacker-News.
     * @returns Recuperar un Observable capas de recuperar los codigos de las
     * 500 Top historias.
     */
    getObservableIdsBestStories(): Observable<number[]> {
        const urlReq = `${this.apiBaseUrl}/topstories.json`;
        return this.http.get<number[]>(urlReq);
    }

    /**
     * Obtener un observable para consultar a una historia id
     * @param id es el codigo de identificacion de la historia a obtener
     * @returns
     */
    getObservableDataStory(id: number): Observable<Story> {
        const urlReq = `${this.apiBaseUrl}/item/${id}.json`;
        return this.http.get<Story>(urlReq);
    }

    /**
     * Obtener un observable para recuperar el array con toda la informacion
     * de las historia con base en un array number ids
     * @param ids es un array con los codigos numericos de cada historia.
     * @returns Recuperar un Observable capas de recuperar las 500 Top
     * historias.
     */
    getDataStories(ids: number[]): Observable<Story[]> {
        const observables = ids.map(id => this.getObservableDataStory(id));
        return forkJoin(observables);
    }
}
