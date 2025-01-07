class Node<T> {
    value: T;
    prev: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.prev = null;
    }
}

export default class Stack<T> {
    _top: Node<T> | null;
    _length: number;
    constructor() {
        this._top = null;
        this._length = 0;
    }

    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item: T): number {
        const node = new Node(item);
        node.prev = this._top;
        this._top = node;
        this._length++;
        return this._length;
    }

    /**
     * Remove an item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop(): T | undefined {
        if (!this._top) {
            return undefined;
        }
        const temp = this._top;
        if (this._length === 1) {
            this._top = null;
        } else {
            this._top = this._top.prev;
            temp.prev = null;
        }
        this._length--;
        return temp.value;
    }

    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty(): boolean {
        return this._length === 0;
    }

    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek(): T | undefined {
        return this.isEmpty() ? undefined : this._top!.value;
    }

    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length(): number {
        return this._length;
    }
}
