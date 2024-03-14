"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _top = 0;
const _parent = (i) => ((i + 1) >>> 1) - 1;
const _left = (i) => (i << 1) + 1;
const _right = (i) => (i + 1) << 1;
class PriorityQueue {
    _heap;
    _comparator;
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
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
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > _top) {
            this._swap(_top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    find(value) {
        return this._findRecursive(value, 0);
    }
    _findRecursive(value, node) {
        if (node >= this._heap.length) {
            return -1; // Value not found
        }
        if (this._heap[node] === value) {
            return node; // Value found
        }
        const leftIndex = this._findRecursive(value, _left(node));
        if (leftIndex !== -1) {
            return leftIndex; // Value found in the left subtree
        }
        const rightIndex = this._findRecursive(value, _right(node));
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
            node = maxChild;
        }
    }
}
exports.default = PriorityQueue;
//# sourceMappingURL=index.js.map