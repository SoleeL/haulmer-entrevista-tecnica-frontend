import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { DynamicDataSource } from '../../classes/dynamicDataSource-comment';
import { DynamicFlatNode } from '../../classes/dynamicFlatNode-comment.class';
import { Comments } from '../../interfaces/comment.interface';
import { DynamicDatabase } from '../../services/dynamic-database.service';

@Component({
    selector: 'app-comment-dynamic',
    templateUrl: './comment-dynamic.component.html',
    styleUrls: ['./comment-dynamic.component.css'],
})
export class CommentDynamicComponent implements OnInit {
    @Input() comments!: Comments[];

    treeControl!: FlatTreeControl<DynamicFlatNode<Comments>>;

    dataSource!: DynamicDataSource;

    constructor(private database: DynamicDatabase) {}

    ngOnInit(): void {
        this.database.setRootLevel(this.comments);

        this.treeControl = new FlatTreeControl<DynamicFlatNode<Comments>>(
            this.getLevel,
            this.isExpandable
        );
        this.dataSource = new DynamicDataSource(
            this.treeControl,
            this.database
        );

        this.dataSource.data = this.database.initialData();
    }

    getLevel = (node: DynamicFlatNode<Comments>) => node.level;

    isExpandable = (node: DynamicFlatNode<Comments>) => node.expandable;

    hasChild = (_: number, _nodeData: DynamicFlatNode<Comments>) =>
        _nodeData.expandable;
}
