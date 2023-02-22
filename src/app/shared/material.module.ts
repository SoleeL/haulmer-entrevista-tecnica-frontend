import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatTableModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTreeModule,
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatTableModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTreeModule,
    ],
})
export class MaterialModule {}
