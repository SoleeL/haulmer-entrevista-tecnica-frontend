import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Subcomponente que muestra una barra con titulo centrado
 */
@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {}
