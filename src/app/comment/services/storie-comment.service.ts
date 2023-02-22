import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Story, Comments } from '../interfaces/comment.interface';
import { Observable, forkJoin } from 'rxjs';

/**
 * Servicio para obtener los comentarios de una historias de Hacker-News
 * especifica
 */
@Injectable({
    providedIn: 'root',
})
export class StorieCommentService {
    private apiBaseUrl: string = 'https://hacker-news.firebaseio.com/v0';

    constructor(private http: HttpClient) {}

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
     * Obtener un observable para consultar a un comentario id
     * @param id es el codigo de identificacion del comentario a obtener
     * @returns
     */
    getObservableDataComment(id: number): Observable<Comments> {
        const urlReq = `${this.apiBaseUrl}/item/${id}.json`;
        return this.http.get<Comments>(urlReq);
    }

    /**
     * Obtener un observable para recuperar el array con todos los comentarios
     * de una base en el array 'kids' una instancia Story.
     * @param ids es un array con los codigos numericos de cada comentario.
     * @returns Recuperar un Observable capas de recuperar multiples
     * comentarios.
     */
    getDataComments(ids: number[] | undefined): Observable<Comments[]> {
        const observables = ids!.map(id => this.getObservableDataComment(id));
        return forkJoin(observables);
    }
}
