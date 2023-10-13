export default class Group<K = unknown, V = unknown> extends Map<K, V> {
    #private;
    [x: string]: any;
    constructor(size: number, it?: Iterable<readonly [K, V]>);
    filter(func: (val: V, key: K, grp: this) => boolean): Group<K, V>;
    V(): V[];
    K(): K[];
    top(amount?: number): V | V[] | undefined;
    bottom(amount?: number): V | V[] | undefined;
    shift(): V | undefined;
    shiftN(amount: number): V | V[] | undefined;
    pop(): V | undefined;
    popN(amount: number): V | V[] | undefined;
    set(key: K, value: V): this;
    add(value: V): this;
    diff(other: Group<K, V>): Group<K, V>;
    union(other: Group<K, V>): Group<K, V>;
    intersect(other: Group<K, V>): Group<K, V>;
    clone(): Group<K, V>;
    find(func: (val: V, key: K, grp: this) => boolean): V | undefined;
    findKey(func: (val: V, key: K, grp: this) => boolean): K | undefined;
    findEntry(func: (val: V, key: K, grp: this) => boolean): (K | V)[] | undefined;
    some(func: (val: V, key: K, grp: this) => boolean): true | undefined;
    every(func: (val: V, key: K, grp: this) => boolean): false | undefined;
    map<T>(func: (val: V, key: K, grp: this) => T): Group<K, T>;
    findIndex(func: (val: V, key: K, grp: this) => boolean): number | undefined;
    reduce(func: (acc: V, val: V, key: K, grp: this) => V, init?: V): V | undefined;
    break(func: (val: V, key: K, grp: this) => boolean): Group<K, V>[];
    get maxSize(): number;
    set maxSize(value: number);
    sort(func: (a: V, b: V) => number): Group<K, V>;
    weakSort(): Group<K, V>;
    sortKeys(func: (a: K, b: K) => number): Group<K, V>;
    toJSON(): Record<string, V>;
}
//# sourceMappingURL=index.d.ts.map