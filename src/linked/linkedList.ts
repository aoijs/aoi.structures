import * as Types from './types';
import Node from './node';

export class LinkedList {
    head: null | Node;
    size: number;
    __lastNode__: Node;
    constructor() {
        this.head = null;
        this.size = 0;
        Object.defineProperty(this, '__lastNode__', { value: null, writable: true, enumerable: true })
    }
    /**
     * add
     */
    public add(element: unknown) {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
        }
        else {
            let curr = this.head;
            while (curr) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
        this.__lastNode__ = node;
    }
    /**
     * removeLast
     */
    public removeLast(): Node {
        let curr = this.head;
        let prev;

        while (curr) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.__lastNode__ = prev;
        this.size--
        return curr;
    }
    /**
     * remove
     */
    public remove(element: unknown): void {
        let curr = this.head;
        let prev;

        if (!curr) return;
        else if (this.head.element === element) {
            curr = this.head.next;
            this.head = curr;
        }
        else {
            while (curr) {
                prev = curr;
                if (curr.element = element) {
                    prev.next = curr.next;
                    break;
                }
                else {
                    curr = curr.next;
                }
            }
        }
        this.size--
    }
    /**
     * insertAt
     */
    public insertAt() {
        
    }
}