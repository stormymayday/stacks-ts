export default class Stack<T> {
    _items: Array<T>;
    constructor() {
        this._items = [];
    }

    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item: T): number {
        return this._items.push(item);
    }

    /**
     * Remove an item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop(): T | undefined {
        return this._items.pop();
    }

    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty(): boolean {
        return this._items.length === 0;
    }

    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek(): T | undefined {
        return this.isEmpty() ? undefined : this._items[this._items.length - 1];
    }

    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length(): number {
        return this._items.length;
    }
}
