import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { Story } from '../../interfaces/story.interface';

import { BestStoriesService } from '../../services/best-stories.service';

/**
 * Componente principal de la vista '/top'
 */
@Component({
    selector: 'app-main-story',
    templateUrl: './main-story.component.html',
    styleUrls: ['./main-story.component.css'],
})
export class MainStoryComponent implements OnInit {
    /**
     * Array para almacenar los codigos de identificacion de las 500 Top
     * Historias
     */
    dataIdsSource: number[] = [];

    /**
     * Array con instancias de informacion de las 500 Top Historias.
     */
    dataSource!: Story[];

    constructor(private bestStoriesService: BestStoriesService) {}

    // TODO: disparar carga del local storage para evitar recarga de datos

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.bestStoriesService
            .getObservableIdsBestStories()
            .pipe(
                /**
                 * Guardar los Ids de las historias por si se desea
                 * realizar consultas posteriores.
                 */
                tap(ids => (this.dataIdsSource = ids)),
                /**
                 * Se interviene la respuesta de 'getObservableIdsBestStories'
                 * y utiliza para adquirir los datos de cada Historia
                 */
                switchMap(ids => this.bestStoriesService.getDataStories(ids))
            )
            .subscribe({
                next: storys => {
                    this.dataSource = storys;
                },
                error: (err: any) => {
                    console.log(err);
                },
            });
    }
}
