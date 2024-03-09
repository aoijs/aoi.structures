export default class PriorityQueue {
    _heap: any[];
    _comparator: (a: any, b: any) => boolean;
    constructor(comparator?: (a: any, b: any) => boolean);
    size(): number;
    isEmpty(): boolean;
    peek(): any;
    push(...values: any[]): number;
    pop(): any;
    replace(value: any): any;
    _greater(i: number, j: number): boolean;
    _swap(i: number, j: number): void;
    _siftUp(): void;
    _siftDown(): void;
}
//# sourceMappingURL=index.d.ts.map