import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCommentComponent } from './pages/main-comment/main-comment.component';

import { MaterialModule } from '../shared/material.module';
import { StoryComponent } from './components/story/story.component';
import { CommentComponent } from './components/comment/comment.component';
// import { CommentDynamicComponent } from './components/comment-dynamic/comment-dynamic.component';
import { DecodeHTML } from './pipes/decodeHTML.pipe';

@NgModule({
    declarations: [
        MainCommentComponent,
        StoryComponent,
        CommentComponent,
        DecodeHTML,
    ],
    imports: [CommonModule, MaterialModule],
    exports: [MainCommentComponent],
})
export class CommentModule {}
