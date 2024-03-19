export default class Group extends Map {
    #maxSize;
    constructor(size, it) {
        super(it);
        this.#maxSize = size;
    }
    filter(func) {
        const res = new Group(this.#maxSize);
        for (const [key, value] of this.entries()) {
            if (func(value, key, this))
                res.set(key, value);
        }
        return res;
    }
    V() {
        return [...this.values()];
    }
    K() {
        return [...this.keys()];
    }
    top(amount = 1) {
        const res = this.V().slice(0, amount);
        if (res.length === 0)
            return undefined;
        if (res.length === 1)
            return res[0];
        return res;
    }
    bottom(amount = 1) {
        const res = this.V().slice(-amount);
        if (res.length === 0)
            return undefined;
        if (res.length === 1)
            return res[0];
        return res;
    }
    shift() {
        const key = this.keys().next().value;
        if (!key)
            return undefined;
        const val = this.get(key);
        this.delete(key);
        return val;
    }
    shiftN(amount) {
        const res = [];
        for (let i = 0; i < amount; i++) {
            const val = this.shift();
            if (!val)
                break;
            res.push(val);
        }
        if (res.length === 0)
            return undefined;
        if (res.length === 1)
            return res[0];
        return res;
    }
    pop() {
        const key = this.K()[this.size - 1];
        if (!key)
            return undefined;
        const val = this.get(key);
        this.delete(key);
        return val;
    }
    popN(amount) {
        const res = [];
        const keys = this.K();
        let index = keys.length - 1;
        for (let i = 0; i < amount; i++) {
            const val = this.get(keys[index]);
            if (!val)
                break;
            res.push(val);
            this.delete(keys[index]);
            index--;
        }
        if (res.length === 0)
            return undefined;
        if (res.length === 1)
            return res[0];
        return res;
    }
    set(key, value) {
        if (this.size >= this.#maxSize)
            this.shift();
        return super.set(key, value);
    }
    add(value) {
        if (this.size >= this.#maxSize)
            this.shift();
        return super.set(value, value);
    }
    diff(other) {
        const res = new Group(this.#maxSize);
        for (const [key, value] of this.entries()) {
            if (!other.has(key))
                res.set(key, value);
        }
        return res;
    }
    union(other) {
        const res = new Group(Infinity);
        for (const [key, value] of this.entries()) {
            res.set(key, value);
        }
        for (const [key, value] of other.entries()) {
            res.set(key, value);
        }
        res.#maxSize = this.size;
        return res;
    }
    intersect(other) {
        const res = new Group(Infinity);
        for (const [key, value] of this.entries()) {
            if (other.has(key))
                res.set(key, value);
        }
        res.#maxSize = this.size;
        return res;
    }
    clone() {
        return new Group(this.#maxSize, this.entries());
    }
    find(func) {
        for (const [key, value] of this.entries())
            if (func(value, key, this))
                return value;
    }
    findKey(func) {
        for (const [key, value] of this.entries())
            if (func(value, key, this))
                return key;
    }
    findEntry(func) {
        for (const [key, value] of this.entries())
            if (func(value, key, this))
                return [key, value];
    }
    some(func) {
        for (const [key, value] of this.entries())
            if (func(value, key, this))
                return true;
    }
    every(func) {
        for (const [key, value] of this.entries())
            if (!func(value, key, this))
                return false;
    }
    map(func) {
        const res = new Group(this.#maxSize);
        for (const [key, value] of this.entries())
            res.set(key, func(value, key, this));
        return res;
    }
    findIndex(func) {
        let i = 0;
        for (const [key, value] of this.entries()) {
            if (func(value, key, this))
                return i;
            i++;
        }
    }
    reduce(func, init) {
        let acc = init;
        for (const [key, value] of this.entries()) {
            if (acc === undefined)
                acc = value;
            else
                acc = func(acc, value, key, this);
        }
        return acc;
    }
    break(func) {
        const trueGroup = new Group(this.#maxSize);
        const falseGroup = new Group(this.#maxSize);
        for (const [key, value] of this.entries()) {
            if (func(value, key, this))
                trueGroup.set(key, value);
            else
                falseGroup.set(key, value);
        }
        return [trueGroup, falseGroup];
    }
    get maxSize() {
        return this.#maxSize;
    }
    set maxSize(value) {
        this.#maxSize = value;
    }
    sort(func) {
        const arr = [...this.entries()];
        arr.sort(([, a], [, b]) => func(a, b));
        return new Group(this.#maxSize, arr);
    }
    weakSort() {
        const arr = [...this.entries()].sort();
        return new Group(this.#maxSize, arr);
    }
    sortKeys(func) {
        const arr = [...this.entries()];
        arr.sort(([a], [b]) => func(a, b));
        return new Group(this.#maxSize, arr);
    }
    toJSON() {
        const obj = {};
        for (const [key, value] of this.entries()) {
            obj[key] = value;
        }
        return obj;
    }
}
//# sourceMappingURL=index.js.map