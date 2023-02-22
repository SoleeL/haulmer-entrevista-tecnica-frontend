import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Story } from '../../interfaces/comment.interface';

/**
 * Subcomponente de la vista '/story/:id'
 *      Muestra una tarjeta con los detalles de la historia.
 */
@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent implements OnInit {
    @Input() story!: Story;
    date!: Date;
    domain!: URL;

    ngOnInit() {
        // TODO: Implementar Pipes
        this.date = new Date(this.story.time * 1000);
        if (this.story.url) {
            this.domain = new URL(this.story.url!);
        }
    }
}
