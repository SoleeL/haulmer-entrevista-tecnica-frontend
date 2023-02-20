import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainStoryComponent } from './story/pages/main-story/main-story.component';
import { MainCommentComponent } from './comment/pages/main-comment/main-comment.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'top', pathMatch: 'full' },
    { path: 'top', component: MainStoryComponent },
    { path: 'story/:id', component: MainCommentComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
