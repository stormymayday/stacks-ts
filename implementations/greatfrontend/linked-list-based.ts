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
}
