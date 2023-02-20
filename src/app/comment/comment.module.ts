import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCommentComponent } from './pages/main-comment/main-comment.component';

import { MaterialModule } from '../shared/material.module';

@NgModule({
    declarations: [MainCommentComponent],
    imports: [CommonModule, MaterialModule],
    exports: [MainCommentComponent],
})
export class CommentModule {}
