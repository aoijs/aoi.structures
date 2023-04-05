export default class Group<K = unknown, V = unknown> extends Map<K, V> {
    #maxSize: number;
    constructor(size: number, it?: Iterable<readonly [K, V]>) {
        super(it);
        this.#maxSize = size;
    }
    filter(func: (val: V, key: K, grp: this) => boolean) {
        const res = new Group<K, V>(this.#maxSize);
        for (const [key, value] of this.entries()) {
            if (func(value, key, this)) res.set(key,value);
        }
        return res;
    }
    V() {
        return [...this.values()];
    }
    K() {
        return [...this.keys()];
    }
    top(amount: number = 1) {
        const res = this.V().slice(0, amount);
        if (res.length === 0) return undefined;
        if (res.length === 1) return res[0];
        return res;
    }
    bottom(amount: number = 1) {
        const res = this.V().slice(-amount);
        if (res.length === 0) return undefined;
        if (res.length === 1) return res[0];
        return res;
    }
    shift() {
        const key = this.keys().next().value;
        if (!key) return undefined;
        const val = this.get(key);
        this.delete(key);
        return val;
    }
    shiftN(amount: number) {
        const res: V[] = [];
        for (let i = 0; i < amount; i++) {
            const val = this.shift();
            if (!val) break;
            res.push(val);
        }
        if (res.length === 0) return undefined;
        if (res.length === 1) return res[0];
        return res;
    }
    pop() {
        const key = this.K()[this.size - 1];
        if (!key) return undefined;
        const val = this.get(key);
        this.delete(key);
        return val;
    }
    popN(amount: number) {
        const res: V[] = [];
        const keys = this.K();
        let index = keys.length - 1;
        for (let i = 0; i < amount; i++) {
            const val = this.get(keys[index]);
            if (!val) break;
            res.push(val);
            this.delete(keys[index]);
            index--;
        }
        if (res.length === 0) return undefined;
        if (res.length === 1) return res[0];
        return res;
    }
    set(key: K, value: V) {
        if (this.size >= this.#maxSize) this.shift();
        return super.set(key, value);
    }
    add(value: V) {
        if (this.size >= this.#maxSize) this.shift();
        return super.set(value as unknown as K, value);
    }
    diff(other: Group<K, V>) {
        const res = new Group<K, V>(this.#maxSize);
        for (const [key, value] of this.entries()) {
            if (!other.has(key)) res.set(key, value);
        }
        return res;
    }
    union(other: Group<K, V>) {
        const res = new Group<K, V>(Infinity);
        for (const [key, value] of this.entries()) {
            res.set(key, value);
        }
        for (const [key, value] of other.entries()) {
            res.set(key, value);
        }
        res.#maxSize = this.size;
        return res;
    }
    intersect(other: Group<K, V>) {
        const res = new Group<K, V>(Infinity);
        for (const [key, value] of this.entries()) {
            if (other.has(key)) res.set(key, value);
        }
        res.#maxSize = this.size;
        return res;
    }
    clone() {
        return new Group<K, V>(this.#maxSize, this.entries());
    }
    find(func: (val: V, key: K, grp: this) => boolean) {
        for (const [key, value] of this.entries())
            if (func(value, key, this)) return value;
    }
    findKey(func: (val: V, key: K, grp: this) => boolean) {
        for (const [key, value] of this.entries())
            if (func(value, key, this)) return key;
    }
    findEntry(func: (val: V, key: K, grp: this) => boolean) {
        for (const [key, value] of this.entries())
            if (func(value, key, this)) return [key, value];
    }
    some(func: (val: V, key: K, grp: this) => boolean) {
        for (const [key, value] of this.entries())
            if (func(value, key, this)) return true;
    }
    every(func: (val: V, key: K, grp: this) => boolean) {
        for (const [key, value] of this.entries())
            if (!func(value, key, this)) return false;
    }
    map<T>(func: (val: V, key: K, grp: this) => T) {
        const res = new Group<K, T>(this.#maxSize);
        for (const [key, value] of this.entries())
            res.set(key, func(value, key, this));
        return res;
    }
    findIndex(func: (val: V, key: K, grp: this) => boolean) {
        let i = 0;
        for (const [key, value] of this.entries()) {
            if (func(value, key, this)) return i;
            i++;
        }
    }
    reduce(func: (acc: V, val: V, key: K, grp: this) => V, init?: V) {
        let acc = init;
        for (const [key, value] of this.entries()) {
            if (acc === undefined) acc = value;
            else acc = func(acc, value, key, this);
        }
        return acc;
    }
    break(func: (val: V, key: K, grp: this) => boolean) {
        const trueGroup = new Group<K, V>(this.#maxSize);
        const falseGroup = new Group<K, V>(this.#maxSize);
        for (const [key, value] of this.entries()) {
            if (func(value, key, this)) trueGroup.set(key, value);
            else falseGroup.set(key, value);
        }
        return [trueGroup, falseGroup];
    }
    get maxSize() {
        return this.#maxSize;
    }
    set maxSize(value: number) {
        this.#maxSize = value;
    }
    sort ( func: ( a: V, b: V ) => number )
    { 
        const arr = [ ...this.entries() ];
        arr.sort( ( [ , a ], [ , b ] ) => func( a, b ) );
        return new Group<K, V>( this.#maxSize, arr );
    }
    weakSort ()
    {
        const arr = [ ...this.entries() ].sort();
        return new Group<K, V>( this.#maxSize, arr );
    }
    sortKeys ( func: ( a: K, b: K ) => number )
    {
        const arr = [ ...this.entries() ];
        arr.sort( ( [ a ], [ b ] ) => func( a, b ) );
        return new Group<K, V>( this.#maxSize, arr );
    }
}
