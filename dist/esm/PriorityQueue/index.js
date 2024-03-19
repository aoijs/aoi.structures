const _top = 0;
const _parent = (i) => ((i + 1) >>> 1) - 1;
const _left = (i) => (i << 1) + 1;
const _right = (i) => (i + 1) << 1;
export default class PriorityQueue {
    _heap;
    _comparator;
    _keyMap;
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
        this._keyMap = new Map();
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[_top];
    }
    push(...values) {
        values.forEach((value) => {
            this._heap.push(value);
            this._keyMap.set(value, this.size() - 1);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > _top) {
            this._swap(_top, bottom);
            this._keyMap.set(this._heap[_top], _top);
            this._keyMap.delete(this._heap[bottom]);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    findIndex(value) {
        const index = this._keyMap.get(value);
        return index === undefined ? -1 : index;
    }
    findFromProp(retrievingFunction) {
        return this._findFromPropRecursive(retrievingFunction, 0);
    }
    _findFromPropRecursive(retrievingFunction, node) {
        if (node >= this._heap.length) {
            return -1; // Value not found
        }
        if (retrievingFunction(this._heap[node])) {
            return node; // Value found
        }
        const leftIndex = this._findFromPropRecursive(retrievingFunction, _left(node));
        if (leftIndex !== -1) {
            return leftIndex; // Value found in the left subtree
        }
        const rightIndex = this._findFromPropRecursive(retrievingFunction, _right(node));
        if (rightIndex !== -1) {
            return rightIndex; // Value found in the right subtree
        }
        return -1; // Value not found
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[_top] = value;
        this._siftDown();
        return replacedValue;
    }
    replaceFromProp(value, replacingFunction) {
        const index = this._findFromPropRecursive(replacingFunction, 0);
        if (index !== -1) {
            this._heap[index] = value;
            this._keyMap.delete(this._heap[index].key);
            this._keyMap.set(value, index);
            this._siftUp();
            this._siftDown();
        }
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > _top && this._greater(node, _parent(node))) {
            this._swap(node, _parent(node));
            this._keyMap.set(this._heap[node], node);
            this._keyMap.set(this._heap[_parent(node)], _parent(node));
            node = _parent(node);
        }
    }
    _siftDown() {
        let node = _top;
        while ((_left(node) < this.size() && this._greater(_left(node), node)) ||
            (_right(node) < this.size() && this._greater(_right(node), node))) {
            let maxChild = _right(node) < this.size() && this._greater(_right(node), _left(node))
                ? _right(node)
                : _left(node);
            this._swap(node, maxChild);
            this._keyMap.set(this._heap[node], node);
            this._keyMap.set(this._heap[maxChild], maxChild);
            node = maxChild;
        }
    }
    remove(value) {
        const index = this._keyMap.get(value);
        if (index !== undefined) {
            this._heap.splice(index, 1);
            this._keyMap.delete(value);
            this._siftDown();
            this._siftUp();
        }
    }
    removeByProp(retrievingFunction) {
        const index = this._findFromPropRecursive(retrievingFunction, 0);
        if (index !== -1) {
            this._heap.splice(index, 1);
            this._keyMap.delete(this._heap[index]);
            this._siftDown();
            this._siftUp();
        }
    }
}
//# sourceMappingURL=index.js.map