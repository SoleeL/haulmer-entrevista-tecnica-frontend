export class DynamicFlatNode<Comments> {
    constructor(
        public item: Comments,
        public level: number = 1,
        public expandable: boolean = false,
        public isLoading: boolean = false
    ) {}
}
