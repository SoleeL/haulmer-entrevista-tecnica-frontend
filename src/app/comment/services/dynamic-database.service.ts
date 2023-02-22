import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicFlatNode } from '../classes/dynamicFlatNode-comment.class';
import { Comments } from '../interfaces/comment.interface';
import { StorieCommentService } from './storie-comment.service';

/**
 * Servicio para obtener los subcomentarios de un comentario padre.
 */
@Injectable({ providedIn: 'root' })
export class DynamicDatabase {
    /**
     * Se utiliza el servicio de comentarios para recuperar comentarios
     * anidados.
     */
    constructor(private storieCommentService: StorieCommentService) {}

    // Comentarios de primer nivel
    rootLevelNodes: Comments[] = [];

    setRootLevel(comments: Comments[]) {
        this.rootLevelNodes = comments;
    }

    initialData(): DynamicFlatNode<Comments>[] {
        return this.rootLevelNodes.map(
            /**
             * Considerar cambiar el tercer argumento de DynamicFlatNode
             * dependiendo del contexto.
             * En la documentacion se considera que todos los elementos del
             * arbol tienen hojas.
             */
            comment =>
                new DynamicFlatNode(comment, 0, this.isExpandable(comment))
        );
    }

    /**
     * Obtener un observable para recuperar un sublistado de comentarios.
     * @param node Nodo padre del que se quiere recuperar hijos.
     * @returns Un observable.
     */
    getChildren(node: Comments): Observable<Comments[] | undefined> {
        return this.storieCommentService.getDataComments(node.kids);
    }

    /**
     * Revisa se un nodo tiene hijos, para determinar su capacidad de
     * expandirse.
     * Util para mapear la primera ronda de comentarios.
     */
    isExpandable(node: Comments): boolean {
        return !!node.kids && node.kids.length > 0;
    }
}
