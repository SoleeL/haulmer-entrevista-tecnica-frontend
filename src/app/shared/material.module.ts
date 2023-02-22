import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

/**
 * Modulo que centraliza todas las importaciones y exportaciones de Material.
 */
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatGridListModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatTableModule,
        MatTooltipModule,
        MatInputModule,
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatGridListModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatTableModule,
        MatTooltipModule,
        MatInputModule,
    ],
})
export class MaterialModule {}
