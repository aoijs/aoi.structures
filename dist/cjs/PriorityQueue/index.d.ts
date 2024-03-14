export default class PriorityQueue {
    _heap: any[];
    _comparator: (a: any, b: any) => boolean;
    constructor(comparator?: (a: any, b: any) => boolean);
    size(): number;
    isEmpty(): boolean;
    peek(): any;
    push(...values: any[]): number;
    pop(): any;
    find(value: any): number;
    private _findRecursive;
    replace(value: any): any;
    private _greater;
    private _swap;
    private _siftUp;
    private _siftDown;
}
//# sourceMappingURL=index.d.ts.map