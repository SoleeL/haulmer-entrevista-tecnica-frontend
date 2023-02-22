import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../interfaces/comment.interface';
import { Comments } from '../../interfaces/comment.interface';

import { StorieCommentService } from '../../services/storie-comment.service';
import { switchMap, tap, map } from 'rxjs/operators';

@Component({
    selector: 'app-main-comment',
    templateUrl: './main-comment.component.html',
    styleUrls: ['./main-comment.component.css'],
})
export class MainCommentComponent implements OnInit {
    story!: Story;
    comments!: Comments[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private storieCommentService: StorieCommentService
    ) {}

    ngOnInit() {
        this.loadStoryData();
    }

    loadStoryData() {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) =>
                    this.storieCommentService.getObservableDataStory(id)
                )
            )
            .subscribe(story => {
                this.story = story;
                this.loadCommentsData(this.story.kids!);
            });
    }

    // TODO: Resolver comentarios eliminados
    loadCommentsData(ids: number[]) {
        this.storieCommentService
            .getDataComments(this.story.kids!)
            .subscribe(comments => {
                this.comments = comments!;
                this.removeDeletedComment();
            });
    }

    removeDeletedComment() {
        this.comments = this.comments.filter(comment => !comment.deleted);
        this.comments = this.comments.filter(comment => !comment.dead);
    }
}
