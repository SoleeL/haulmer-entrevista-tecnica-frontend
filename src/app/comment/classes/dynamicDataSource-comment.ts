import {
    CollectionViewer,
    DataSource,
    SelectionChange,
} from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, map, merge, Observable } from 'rxjs';
import { Comments } from '../interfaces/comment.interface';
import { DynamicDatabase } from '../services/dynamic-database.service';
import { DynamicFlatNode } from './dynamicFlatNode-comment.class';

export class DynamicDataSource
    implements DataSource<DynamicFlatNode<Comments>>
{
    dataChange = new BehaviorSubject<DynamicFlatNode<Comments>[]>([]);

    get data(): DynamicFlatNode<Comments>[] {
        return this.dataChange.value;
    }

    set data(value: DynamicFlatNode<Comments>[]) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }

    constructor(
        private _treeControl: FlatTreeControl<DynamicFlatNode<Comments>>,
        private _database: DynamicDatabase
    ) {}

    connect(
        collectionViewer: CollectionViewer
    ): Observable<DynamicFlatNode<Comments>[]> {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (
                (change as SelectionChange<DynamicFlatNode<Comments>>).added ||
                (change as SelectionChange<DynamicFlatNode<Comments>>).removed
            ) {
                this.handleTreeControl(
                    change as SelectionChange<DynamicFlatNode<Comments>>
                );
            }
        });

        return merge(collectionViewer.viewChange, this.dataChange).pipe(
            map(() => this.data)
        );
    }

    disconnect(collectionViewer: CollectionViewer): void {}

    handleTreeControl(change: SelectionChange<DynamicFlatNode<Comments>>) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNode(node, false));
        }
    }

    toggleNode(node: DynamicFlatNode<Comments>, expand: boolean) {
        const children = this._database
            .getChildren(node.item)
            .subscribe(children => {
                const index = this.data.indexOf(node);
                if (!children || index < 0) {
                    // If no children, or cannot find the node, no op
                    return;
                }

                node.isLoading = true;
                setTimeout(() => {
                    if (expand) {
                        const nodes = children.map(
                            comment =>
                                new DynamicFlatNode(
                                    comment,
                                    node.level + 1,
                                    this._database.isExpandable(comment)
                                )
                        );
                        this.data.splice(index + 1, 0, ...nodes);
                    } else {
                        let count = 0;
                        for (
                            let i = index + 1;
                            i < this.data.length &&
                            this.data[i].level > node.level;
                            i++, count++
                        ) {}
                        this.data.splice(index + 1, count);
                    }

                    // notify the change
                    this.dataChange.next(this.data);
                    node.isLoading = false;
                }, 1000);
            });
    }
}
