import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';

import { Story } from '../../interfaces/story.interface';

/**
 * Componente para renderizar tabla con las 500 Top historias.
 * Subcompoenete de la vista '/top'
 */
@Component({
    selector: 'app-story-table',
    templateUrl: './story-table.component.html',
    styleUrls: ['./story-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryTableComponent implements OnInit, AfterViewInit {
    /**
     * Cabeceras de las columnas
     */
    displayedColumns: string[] = ['id', 'by', 'title', 'score', 'comments'];

    /**
     * Fuente de datos para la tabla.
     * Propiedad que se actualiza segun funcion 'applyFilter'.
     */
    dataFilter: MatTableDataSource<Story> = new MatTableDataSource();

    /**
     * Propiedad que se actualiza segun el estado dinamico de dataFilter
     */
    resultsLength = 0;

    // Paginador dinamico de la tabla
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    // TODO: Buscar como implementar de manera correcta.
    @ViewChild(MatSort) sort!: MatSort;

    @Input() dataSource: Story[] = [];

    ngOnInit() {
        this.dataFilter = new MatTableDataSource(this.dataSource);
        this.resultsLength = this.dataFilter.data.length;
    }

    ngAfterViewInit() {
        this.dataFilter.paginator = this.paginator;
    }

    // TODO: Revisar si se puede reemplazar para evitar la renderizacion
    // reiteradad de la tabla cada vez que se apreta una tecla.
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataFilter.filter = filterValue.trim().toLowerCase();
    }

    getDomain(stringUrl: string) {
        return new URL(stringUrl).hostname;
    }
}
