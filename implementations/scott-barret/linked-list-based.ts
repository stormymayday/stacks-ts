class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class Stack<T> {
    _top: Node<T> | null;
    _length: number;
    constructor(value: T) {
        const newNode = new Node(value);
        this._top = newNode;
        this._length = 1;
    }

    /**
     * Pushes an item onto the top of the stack.
     */
    push(value: T): Stack<T> {
        const newNode = new Node(value);
        if (this._length === 0) {
            this._top = newNode;
        } else {
            newNode.next = this._top;
            this._top = newNode;
        }
        this._length++;
        return this;
    }

    /**
     * Remove an item at the top of the stack.
     */
    pop(): Node<T> | undefined {
        if (!this._top) {
            return undefined;
        } else {
            const temp = this._top;
            this._top = this._top.next;
            temp.next = null;
            this._length--;
            return temp;
        }
    }

    /**
     * Determines if the stack is empty.
     */
    isEmpty(): boolean {
        if (!this._top) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Returns the item at the top of the stack without removing it from the stack.
     */
    peek(): T | undefined {
        if (!this._top) {
            return undefined;
        } else {
            return this._top.value;
        }
    }

    /**
     * Returns the number of items in the stack.
     */
    length(): number {
        return this._length;
    }
}
