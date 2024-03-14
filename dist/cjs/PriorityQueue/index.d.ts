export default class PriorityQueue {
    _heap: any[];
    _comparator: (a: any, b: any) => boolean;
    _keyMap: Map<any, number>;
    constructor(comparator?: (a: any, b: any) => boolean);
    size(): number;
    isEmpty(): boolean;
    peek(): any;
    push(...values: any[]): number;
    pop(): any;
    findIndex(value: any): number;
    findFromProp(retrievingFunction: (a: any) => boolean): number;
    private _findFromPropRecursive;
    replace(value: any): any;
    replaceFromProp(value: any, replacingFunction: (a: any) => boolean): void;
    private _greater;
    private _swap;
    private _siftUp;
    private _siftDown;
    remove(value: any): void;
    removeByProp(retrievingFunction: (a: any) => boolean): void;
}
//# sourceMappingURL=index.d.ts.map