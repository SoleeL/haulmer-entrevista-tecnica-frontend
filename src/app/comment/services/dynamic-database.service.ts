import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicFlatNode } from '../classes/dynamicFlatNode-comment.class';
import { Comments } from '../interfaces/comment.interface';
import { StorieCommentService } from './storie-comment.service';

@Injectable({ providedIn: 'root' })
export class DynamicDatabase {
    constructor(private storieCommentService: StorieCommentService) {}

    rootLevelNodes: Comments[] = [];

    setRootLevel(comments: Comments[]) {
        this.rootLevelNodes = comments;
    }

    initialData(): DynamicFlatNode<Comments>[] {
        return this.rootLevelNodes.map(
            // Considerar cambiar el tercer argumento
            //  de DynamicFlatNode dependiendo del contexto.
            // En la documentacion se considera que todos los elementos del
            //  arbol tienen hojas.
            comment =>
                new DynamicFlatNode(comment, 0, this.isExpandable(comment))
        );
    }

    getChildren(node: Comments): Observable<Comments[] | undefined> {
        return this.storieCommentService.getDataComments(node.kids);
    }

    isExpandable(node: Comments): boolean {
        return !!node.kids && node.kids.length > 0;
    }
}
