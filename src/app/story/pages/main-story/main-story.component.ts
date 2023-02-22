import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { Story } from '../../interfaces/story.interface';

import { BestStoriesService } from '../../services/best-stories.service';

@Component({
    selector: 'app-main-story',
    templateUrl: './main-story.component.html',
    styleUrls: ['./main-story.component.css'],
})
export class MainStoryComponent implements OnInit {
    dataIdsSource: number[] = [];
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
                tap(ids => (this.dataIdsSource = ids)),
                // required only if you need to store ids
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
