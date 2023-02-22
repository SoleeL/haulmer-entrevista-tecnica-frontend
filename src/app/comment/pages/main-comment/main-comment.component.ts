import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../interfaces/comment.interface';
import { Comments } from '../../interfaces/comment.interface';

import { StorieCommentService } from '../../services/storie-comment.service';
import { switchMap } from 'rxjs/operators';

/**
 * Componente principal de la vista '/story/:id'
 */
@Component({
    selector: 'app-main-comment',
    templateUrl: './main-comment.component.html',
    styleUrls: ['./main-comment.component.css'],
})
export class MainCommentComponent implements OnInit {
    // Se utilizan para subcomponentes separados.
    story!: Story;
    comments!: Comments[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private storieCommentService: StorieCommentService,
        private zone: NgZone
    ) {}

    ngOnInit() {
        this.loadStoryData();
    }

    /**
     * Se inicializa la adquisicion de la data de la historia /:id
     */
    loadStoryData() {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) =>
                    this.storieCommentService.getObservableDataStory(id)
                )
            )
            .subscribe(story => {
                console.log(story.type != 'story');
                if (story == null || story.type != 'story') {
                    // Si lo que se obtiene no es una story en la subruta /:id
                    // entonces se redirecciona a /404
                    this.zone.runOutsideAngular(() => {
                        window.location.href = '/404';
                    });
                }
                this.story = story;

                // Recuperar los comentarios de la historia.
                this.loadCommentsData(this.story.kids!);
            });
    }

    // //  TODO: Resolver comentarios eliminados
    loadCommentsData(ids: number[]) {
        this.storieCommentService
            .getDataComments(this.story.kids!)
            .subscribe(comments => {
                this.comments = comments!;
                // Eliminar comentarios no aptos.
                this.removeDeletedComment();
            });
    }

    // TODO: Convertir en una funcion compartida 'shared'
    removeDeletedComment() {
        // Eliminacion de los comentarios eliminados.
        this.comments = this.comments.filter(comment => !comment.deleted);
        // Elimiancion de los comentarios baneados.
        // ?? Estos pueden tener comentarios hijos de todas formas.
        this.comments = this.comments.filter(comment => !comment.dead);
    }
}
