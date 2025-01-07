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
        const newNode = new Node(item);
        if (!this._top) {
            this._top = newNode;
        } else {
            newNode.prev = this._top;
            this._top = newNode;
        }
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
}
