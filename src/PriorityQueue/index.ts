const _top = 0;
const _parent = (i: number) => ((i + 1) >>> 1) - 1;
const _left = (i: number) => (i << 1) + 1;
const _right = (i: number) => (i + 1) << 1;

export default class PriorityQueue {
  _heap: any[];
  _comparator: (a: any, b: any) => boolean;
  constructor(comparator = (a: any, b: any) => a > b) {
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
  push(...values: any[]) {
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
  replace(value: any) {
    const replacedValue = this.peek();
    this._heap[_top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i: number, j: number) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i: number, j: number) {
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
    while (
      (_left(node) < this.size() && this._greater(_left(node), node)) ||
      (_right(node) < this.size() && this._greater(_right(node), node))
    ) {
      let maxChild =
        _right(node) < this.size() && this._greater(_right(node), _left(node))
          ? _right(node)
          : _left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
