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
}
