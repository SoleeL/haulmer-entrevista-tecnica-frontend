import { FlatTreeControl } from '@angular/cdk/tree';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { DynamicDataSource } from '../../classes/dynamicDataSource-comment';
import { DynamicFlatNode } from '../../classes/dynamicFlatNode-comment.class';
import { Comments } from '../../interfaces/comment.interface';
import { DynamicDatabase } from '../../services/dynamic-database.service';

/**
 * Subcomponente de la vista '/story/:id'
 *      Muestra una tarjeta con los detalles de la historia.
 */
@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
    @Input() comments!: Comments[];

    // TODO: Buscar mas informacion sobre esto
    treeControl!: FlatTreeControl<DynamicFlatNode<Comments>>;

    // Fuente de datos dinamica para el Arbol n-ario.
    dataSource!: DynamicDataSource;

    constructor(private database: DynamicDatabase) {}

    ngOnInit() {
        console.log(this.comments);
        // Se establecen los comentarios de primer nivel en el servicio
        this.database.setRootLevel(this.comments);

        this.treeControl = new FlatTreeControl<DynamicFlatNode<Comments>>(
            this.getLevel,
            this.isExpandable
        );

        this.dataSource = new DynamicDataSource(
            this.treeControl,
            this.database
        );

        // Se entregan los datos al arbol para su renderizado.
        this.dataSource.data = this.database.initialData();
    }

    getLevel = (node: DynamicFlatNode<Comments>) => node.level;

    isExpandable = (node: DynamicFlatNode<Comments>) => node.expandable;

    hasChild = (_: number, _nodeData: DynamicFlatNode<Comments>) =>
        _nodeData.expandable;

    getDate(node: Comments) {
        let date = new Date(node.time * 1000);
        return date;
    }
}
