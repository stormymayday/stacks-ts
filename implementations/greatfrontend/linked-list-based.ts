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
    constructor() {
        this._top = null;
        this._length = 0;
    }
}
