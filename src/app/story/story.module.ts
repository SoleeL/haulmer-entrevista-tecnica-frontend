import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { MainStoryComponent } from './pages/main-story/main-story.component';
import { StoryTableComponent } from './components/story-table/story-table.component';

@NgModule({
    declarations: [MainStoryComponent, StoryTableComponent],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [MainStoryComponent],
})
export class StoryModule {}
