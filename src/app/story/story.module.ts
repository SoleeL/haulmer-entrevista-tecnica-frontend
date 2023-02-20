import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';

import { MainStoryComponent } from './pages/main-story/main-story.component';
import { StoryTableComponent } from './components/story-table/story-table.component';

@NgModule({
    declarations: [MainStoryComponent, StoryTableComponent],
    imports: [CommonModule, MaterialModule],
    exports: [MainStoryComponent],
})
export class StoryModule {}
