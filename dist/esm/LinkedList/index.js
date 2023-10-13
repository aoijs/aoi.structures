"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_js_1 = __importDefault(require("./Node.js"));
const isEqual_js_1 = __importDefault(require("../utils/isEqual.js"));
class LinkedList {
    head = null;
    size = 0;
    add(el) {
        const node = new Node_js_1.default(el);
        let head = this.head;
        if (head === null) {
            this.head = node;
            this.size++;
            return;
        }
        while (head?.next !== null) {
            head = head.next;
        }
        head.next = node;
        this.size++;
    }
    addAt(num, el) {
        const node = new Node_js_1.default(el);
        let head = this.head;
        let index = 0;
        if (num > this.size)
            num = this.size;
        if (head === null) {
            this.head = node;
            this.size++;
            return;
        }
        while (head.next != null && index < num) {
            head = head.next;
            index++;
        }
        const next = head.next;
        head.next = node;
        head.next.next = next;
        this.size++;
    }
    deleteFrom(index) {
        if (index < 0 || index >= this.size)
            throw new TypeError("Invalid index provided to LinkedList");
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            if (curr === null)
                return;
            if (index === 0) {
                this.head = curr.next;
            }
            else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr?.next;
                }
                //@ts-ignore
                prev.next = curr?.next;
            }
            this.size--;
            return curr?.value;
        }
    }
    indexOf(el) {
        let count = 0;
        let currentNode = this.head;
        while (currentNode != null) {
            if ((0, isEqual_js_1.default)(currentNode.value, el))
                return count;
            count++;
        }
        return -1;
    }
    isEmpty() {
        return this.size === 0;
    }
    toArray() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}
exports.default = LinkedList;
//# sourceMappingURL=index.js.map