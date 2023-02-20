import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommentModule } from './comment/comment.module';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { StoryModule } from './story/story.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        MaterialModule,
        StoryModule,
        CommentModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
