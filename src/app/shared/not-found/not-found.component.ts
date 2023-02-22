import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Subcompoenete de la vista '/404'
 */
@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
