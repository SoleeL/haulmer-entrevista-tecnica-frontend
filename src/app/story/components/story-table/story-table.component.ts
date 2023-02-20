import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';

import { Story } from '../../interfaces/story.interface';

@Component({
    selector: 'app-story-table',
    templateUrl: './story-table.component.html',
    styleUrls: ['./story-table.component.css'],
})
export class StoryTableComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['id', 'by', 'title', 'score', 'comments'];

    dataFilter: MatTableDataSource<Story> = new MatTableDataSource();
    resultsLength = 0;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    @Input() dataSource: Story[] = [];

    ngOnInit() {
        this.dataFilter = new MatTableDataSource(this.dataSource);
        this.resultsLength = this.dataFilter.data.length;
    }

    ngAfterViewInit() {
        this.dataFilter.paginator = this.paginator;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataFilter.filter = filterValue.trim().toLowerCase();
    }

    getDomain(stringUrl: string) {
        return new URL(stringUrl).hostname;
    }
}
