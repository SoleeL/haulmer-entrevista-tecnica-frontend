import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [ToolbarComponent, NotFoundComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [ToolbarComponent, NotFoundComponent],
})
export class SharedModule {}
